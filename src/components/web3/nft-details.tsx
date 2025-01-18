import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react';
import { Contract, ethers } from 'ethers';
import ERC721ABI from '../../web3/contracts/abi/ERC721ABI';
import ERC1155ABI from '../../web3/contracts/abi/ERC1155ABI';
import useNftSwap, { OrderPayload } from '../../hooks/nft-swap';
import { fetchWhitelist, pinataGatewayUrl } from '../../web3/config/constants';
import { WhitelistContract } from '../ui/whitelist-card';

interface Nft {
    metadata: Record<string, any> | null;
    id: string;
    price?: string;
    direction?: string;
}

interface Order {
    id: string;
    sell: OrderPayload[];
    buy: OrderPayload[];
}

const NFTDetails: React.FC = () => {
    const { contractAddress, tokenId } = useParams<{ contractAddress: string; tokenId?: string }>();
    const { address, isConnected } = useAppKitAccount();
    const { chainId } = useAppKitNetwork();
    const { walletProvider } = useAppKitProvider('eip155');

    const [state, setState] = useState({
        nftData: [] as Nft[],
        page: 1,
        hasMore: true,
        isFetching: false,
        isErc721: false,
        orderBook: null as Order | null,
        balanceERC1155: '0',
        tokenDetail: null as WhitelistContract | null
    });

    const { fetchERC1155Orders, fetchERC721Status } = useNftSwap();
    const perPage = 10;

    // Memoize contract instances
    const contract = useMemo(() => {
        if (!walletProvider || !isConnected || !contractAddress) return null;
        const signer = new ethers.providers.Web3Provider(walletProvider).getSigner();
        const abi = state.isErc721 ? ERC721ABI : ERC1155ABI;
        return new Contract(contractAddress, abi, signer);
    }, [walletProvider, isConnected, contractAddress, state.isErc721]);

    const convertToPinataGateway = useCallback((url: string) => {
        if (url.startsWith('ipfs://')) {
            return `${pinataGatewayUrl}/ipfs/${url.replace('ipfs://', '')}`;
        } else if (url.startsWith('https://ipfs.io/ipfs/')) {
            return `${pinataGatewayUrl}/ipfs/${url.replace('https://ipfs.io/ipfs/', '')}`;
        }
        throw new Error('Invalid IPFS URL format');
    }, []);

    const fetchNFTDetails = useCallback(async () => {
        if (!walletProvider || !isConnected || !address || !contractAddress || !chainId || state.isFetching || !contract) return;

        setState(prev => ({ ...prev, isFetching: true }));

        try {
            const whitelist = fetchWhitelist(chainId);
            const contractDetail = whitelist.find(e => e.address.toLowerCase() === contractAddress.toLowerCase());
            if (!contractDetail) return;

            const isErc721 = contractDetail.tokenType === 'ERC721';
            setState(prev => ({ ...prev, isErc721, tokenDetail: contractDetail }));

            if (isErc721 && contract) {
                const balance = await contract.balanceOf(address);
                const supply = balance.toNumber();
                const startIndex = (state.page - 1) * perPage;
                const length = Math.min(perPage, supply - startIndex);
                const tokenIds = await contract.getArrayTokenIds(startIndex, length, address);

                const tokens = await Promise.all(tokenIds.map(async (id: string) => {
                    const [metadata, orderbook_status] = await Promise.all([
                        getMetadata(id, contract, chainId),
                        fetchERC721Status(contractAddress, id)
                    ]);
                    return { id: id, metadata, orderbook_status };
                }));

                setState(prev => ({
                    ...prev,
                    nftData: [...prev.nftData, ...tokens],
                    hasMore: startIndex + length < supply
                }));
            } else if (!isErc721 && contract && tokenId) {
                const contractDetail = whitelist.find(e => e.tokenId === Number(tokenId));
                if (!contractDetail) return
                const balance = await contract.balanceOf(address, tokenId);
                setState(prev => ({ ...prev, balanceERC1155: balance.toString(), tokenDetail: contractDetail }));

                if (!balance.isZero()) {
                    const orders = await fetchERC1155Orders(contractAddress, tokenId);
                    setState(prev => ({ ...prev, orderBook: orders, hasMore: false }));
                }
            }
        } catch (error) {
            console.error('Failed to fetch NFT details:', error);
        } finally {
            setState(prev => ({ ...prev, isFetching: false }));
        }
    }, [address, contractAddress, tokenId, chainId, state.page, state.isErc721, contract]);

    useEffect(() => {
        fetchNFTDetails();
    }, [fetchNFTDetails]);

    const handleLoadMore = useCallback(() => {
        setState(prev => ({ ...prev, page: prev.page + 1 }));
    }, []);

    // Helper function to fetch metadata
    const getMetadata = async (tokenId: string, contract: Contract, chainId: number | string) => {
        const whitelist = fetchWhitelist(chainId);
        const contractWhitelist = whitelist.find(e => e.address.toLowerCase() === contract.address.toLowerCase());
        if (!contractWhitelist) return null;

        if (contractWhitelist.metadataType === 'collectible') {
            return getMetadataCollectible(tokenId, contract);
        } else {
            return getCustomMetadata(tokenId, contractWhitelist);
        }
    };

    // Simplified getCustomMetadata function
    const getCustomMetadata = async (tokenId: string, contractWhitelist: WhitelistContract): Promise<any> => {
        // Implement based on contractWhitelist.title
        return null; // Placeholder for actual implementation
    };

    const getMetadataCollectible = async (tokenId: any, contract: Contract) => {
        const uri = await contract.tokenURI(tokenId);
        const metadata = await (await fetch(convertToPinataGateway(uri))).json();
        return metadata;
    };

    return (
        <div className="container p-5 mx-auto mt-20">

            {/* NFT Details */}
            {state.isErc721 && (<div className="container p-5 mx-auto mt-20">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {state.nftData.map((nft) => (
                        nft.metadata && (
                            <div key={nft.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
                                <div className="relative">
                                    <img className="object-cover w-full h-64" src={convertToPinataGateway(nft.metadata.image)} alt={nft.metadata.name} />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{nft.metadata.name}</h2>
                                    <p className="mt-2 text-gray-600">{nft.metadata.description}</p>
                                    {/* Autres informations pertinentes */}
                                    {nft.metadata.attributes && (
                                        <div className="mt-4">
                                            <h3 className="text-sm font-medium">Attributes:</h3>
                                            <ul className="list-disc list-inside">
                                                {nft.metadata.attributes.map((attr: any, index: number) => (
                                                    <li key={index}>{attr.trait_type}: {attr.value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            )}

            {/* Order Book */}
            {!state.isErc721 && state.orderBook && state.tokenDetail && (<div className="mt-6">
                <h3 className="mb-2 text-lg font-semibold">{state.tokenDetail.title}</h3>
                <h4 className="mb-2 text-lg font-semibold">Your Balance : {state.balanceERC1155}</h4>
                <div className="relative">
                    <img className="object-cover w-full h-64" src={state.tokenDetail.imageUrl} alt={state.tokenDetail.title} />
                </div>
                <div className="p-4">
                    <p className="mt-2 text-gray-600">{state.tokenDetail.description}</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h4 className="mb-2 text-sm font-medium text-green-500">Bids</h4>
                        {state.orderBook.buy.length > 0 && state.orderBook.buy.map((order, index) => (
                            <div key={index} className="mb-1 text-sm">
                                {order.erc20TokenAmount} - {order.nftTokenAmount}
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2">
                        <h4 className="mb-2 text-sm font-medium text-red-500">Asks</h4>
                        {state.orderBook.sell.length > 0 && state.orderBook.sell.map((order, index) => (
                            <div key={index} className="mb-1 text-sm">
                                {order.erc20TokenAmount} - {order.nftTokenAmount}
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}

            {state.isErc721 && state.isFetching && <p>Loading more NFTs...</p>}
            {state.hasMore && (
                <button
                    onClick={handleLoadMore}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                    disabled={state.isFetching}
                >
                    {state.isFetching ? "Loading..." : "Load More"}
                </button>
            )}
        </div>
    );
};

export default React.memo(NFTDetails);