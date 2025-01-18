import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WhitelistCard, { WhitelistContract } from '../ui/whitelist-card';
import { fetchWhitelist } from '../../web3/config/constants';
import { useAppKitNetwork } from '@reown/appkit/react';

const ChooseNFTFromWhitelist: React.FC = () => {
    const { chainId } = useAppKitNetwork()
    const [whitelistNFTs, setWhitelistNFTs] = useState<WhitelistContract[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (chainId) {
            const whitelist = fetchWhitelist(chainId);
            setWhitelistNFTs(whitelist);
        }
    }, [chainId]);

    const handleSelectNFT = (whitelist: WhitelistContract) => {
        // Naviguer vers une page de listing des ventes pour cet NFT spécifique
        if (whitelist.tokenType === 'ERC721') {
            navigate(`/listings/${whitelist.tokenType}/${whitelist.address}`);
        } else {
            navigate(`/listings/${whitelist.tokenType}/${whitelist.address}/${whitelist.tokenId}`)
        }
    };

    return (
        <div className="p-5">
            <h2 className="mb-4 text-2xl font-bold">Listings</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {whitelistNFTs.map(whitelist => (
                    <div key={whitelist.tokenType === 'ERC721' ? whitelist.address : whitelist.tokenId} onClick={() => handleSelectNFT(whitelist)} className="cursor-pointer">
                        <WhitelistCard
                            whitelist={whitelist}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChooseNFTFromWhitelist;