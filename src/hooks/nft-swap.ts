import { useAppKitNetwork, useAppKitProvider } from "@reown/appkit/react";
import { ethers } from "ethers";
import { NftOrderV4Serialized, NftSwapV4, SignedNftOrderV4, SwappableAssetV4, UserFacingERC1155AssetDataSerializedV4, UserFacingERC20AssetDataSerializedV4 } from "flag-nft-swap-sdk"
import { contractChainSelector, FEES, ORDER_DURATION, ORDERBOOK_API_URL } from "../web3/config/constants";
import { parseUnits } from "ethers/lib/utils";

export interface OrderPayload {
    erc20Token: string
    erc20TokenAmount: string
    nftToken: string
    nftTokenId: string
    nftTokenAmount: string
    nftType: string
    sellOrBuyNft: 'buy' | 'sell'
    chainId: string
    order: NftOrderV4Serialized
    metadata: Record<string, string> | null
    orderStatus: {
        status: string | null
        transactionHash: string | null
        blockNumber: number | null
    }
}

export default function useNftSwap() {

    const { walletProvider } = useAppKitProvider('eip155')
    const { chainId } = useAppKitNetwork()

    const fetchERC721Orders = async (collection: string, offset: number, limit: number) => {

        const orders: OrderPayload[] = [];
        const url = `${ORDERBOOK_API_URL}/orderbook/orders?chainId=${chainId}&nftToken=${collection.toLowerCase()}&status=open&sellOrBuyNft=sell&offset=${offset}&limit=${limit}`;

        const response = await fetch(url);
        const data = await response.json();
        const newOrders = data.orders || [];
        orders.push(...newOrders);

        if (newOrders.length === limit) {
            const additionalOrders = await fetchERC721Orders(collection, offset + limit, limit);
            orders.push(...additionalOrders);
        }
        console.log(orders)

        return orders;
    };

    const fetchERC1155Orders = async (collection: string, tokenId: string) => {

        const sellResponse = await fetch(`${ORDERBOOK_API_URL}/orderbook/orders?chainId=${chainId}&nftToken=${collection.toLowerCase()}&status=open&sellOrBuyNft=sell&nftTokenId=${tokenId}`);
        const buyResponse = await fetch(`${ORDERBOOK_API_URL}/orderbook/orders?chainId=${chainId}&nftToken=${collection.toLowerCase()}&status=open&sellOrBuyNft=buy&nftTokenId=${tokenId}`);

        const sellData = await sellResponse.json();
        const buyData = await buyResponse.json();
        const orders = {
            id: tokenId,
            sell: sellData as OrderPayload[],
            buy: buyData as OrderPayload[],
        }

        return orders
    }

    const fetchERC721Status = async (collection: string,tokenId: string, offset: number = 0, limit: number = 100 ) => {

        const orders: OrderPayload[] = [];
        const url = `${ORDERBOOK_API_URL}/orderbook/orders?chainId=${chainId}&nftToken=${collection.toLowerCase()}&status=open&sellOrBuyNft=sell&offset=${offset}&limit=${limit}&nftTokenId=${tokenId}`;

        const response = await fetch(url);
        const data = await response.json();
        const newOrders = data.orders || [];
        orders.push(...newOrders);

        if (newOrders.length === limit) {
            const additionalOrders = await fetchERC721Orders(collection, offset + limit, limit);
            orders.push(...additionalOrders);
        }
        console.log(orders)

        return orders;
    };

    const approveToken = async (token: SwappableAssetV4, makerAddress: string) => {
        if (!chainId) return false
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace.ProxyMultiProxyAddress,
            orderbookRootUrl: ORDERBOOK_API_URL
        })

        const approvalStatus = await nftSwapSdk.loadApprovalStatus(token, makerAddress);
        if (!approvalStatus.contractApproved) {
            // const currentToast = createTransactionToast('Approve Order')

            try {
                await approveOrder(token, makerAddress)
                // updateTransactionToast(currentToast, TransactionStatus.SUCCESS)
                return true
            }
            catch (err) {
                // updateTransactionToast(currentToast, TransactionStatus.ERROR, err.message.split("(")[0].replace(/([A-Z])/g, ' $1').trim())
                // handleSignedErrors(err)
                return false
            }
            finally {
                // closeTransactionToast(currentToast)
            }
        }
        return true
    }

    const signAndPostOrder = async (makerAsset: UserFacingERC1155AssetDataSerializedV4, takerAsset: UserFacingERC20AssetDataSerializedV4, makerAddress: string, inputPrice: number, metadata: Record<string, string> | undefined) => {
        if (!chainId) return null
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace,
            orderbookRootUrl: ORDERBOOK_API_URL
        })
        try {

            let expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + ORDER_DURATION);
            //expirationDate.setMinutes(expirationDate.getMinutes() + 1); // for tesing purpose
            const order = nftSwapSdk.buildOrder(makerAsset, takerAsset, makerAddress, {
                expiry: expirationDate,
                fees: [
                    {
                        amount: parseUnits((inputPrice * FEES).toString(), 6),
                        recipient: nftSwapSdk.exchangeProxy.address
                    },
                ],
            });
            const signedOrder = await signOrder(order);


            return await nftSwapSdk.postOrder(signedOrder!, chainId, metadata)

        }
        catch (err) {
            // handleSignedErrors(err)
        }
    }

    const approveOrder = async (token: SwappableAssetV4, makerAddress: string) => {
        if (!chainId) return
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace,
            orderbookRootUrl: ORDERBOOK_API_URL
        })

        try {
            const approvalTx = await nftSwapSdk.approveTokenOrNftByAsset(token, makerAddress);
            await approvalTx.wait();
        }
        catch (err) {
            // handleSignedErrors(err)
        }
    }

    const signOrder = async (order: NftOrderV4Serialized) => {
        if (!chainId) return
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace,
            orderbookRootUrl: ORDERBOOK_API_URL
        })
        try {
            const signedOrder = await nftSwapSdk.signOrder(order);
            return signedOrder
        }
        catch (err) {
            // handleSignedErrors(err)
        }
    }

    const fillSignedOrder = async (order: SignedNftOrderV4) => {
        if (!chainId) return
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace,
            orderbookRootUrl: ORDERBOOK_API_URL
        })

        try {
            const fillOrder = await nftSwapSdk.fillSignedOrder(order);
            await fillOrder.wait();
        }
        catch (err) {
            // handleSignedErrors(err)
        }
    }

    const cancelOrder = async (nonce: ethers.BigNumberish, type: "ERC721" | "ERC1155") => {
        if (!chainId) return
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
        const signer = ethersProvider.getSigner()

        const nftSwapSdk = new NftSwapV4(ethersProvider, signer, chainId, {
            zeroExExchangeProxyContractAddress: contractChainSelector[chainId].marketplace,
            orderbookRootUrl: ORDERBOOK_API_URL
        })

        try {
            const cancelOrderResult = await nftSwapSdk.cancelOrder(nonce, type);
            await cancelOrderResult.wait();
        }
        catch (err) {
            // handleSignedErrors(err)
        }
    }

    return { approveToken, signAndPostOrder, signOrder, fillSignedOrder, cancelOrder, fetchERC721Orders, fetchERC1155Orders,fetchERC721Status }
}
