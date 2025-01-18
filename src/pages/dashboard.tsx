import React, { useState, useEffect } from 'react';
import NFTCard from '../components/ui/nft-card';
import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react';
import { fetchWhitelist } from '../web3/config/constants';
import { Contract, ethers } from 'ethers';
import ERC721ABI from '../web3/contracts/abi/ERC721ABI';
import ERC1155ABI from '../web3/contracts/abi/ERC1155ABI';
import { useNavigate } from 'react-router-dom';
import { WhitelistContract } from '../components/ui/whitelist-card';

const Dashboard: React.FC = () => {
  const [userNFTs, setUserNFTs] = useState<WhitelistContract[]>([]);
  const { isConnected, address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const { walletProvider } = useAppKitProvider('eip155');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserNFTs = async () => {
      if (!chainId || !isConnected || !address || !walletProvider) return;

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider, chainId);
      const signer = ethersProvider.getSigner();

      const whitelistNft = fetchWhitelist(chainId);
      if (whitelistNft.length === 0) return;
      const nftsWithBalance = await Promise.all(whitelistNft.map(async (item) => {
        try {
          let balance = ethers.BigNumber.from(0);
          if (item.tokenType === 'ERC721') {
            const contract = new Contract(item.address, ERC721ABI, signer);
            balance = await contract.balanceOf(address);
          } else if (item.tokenType === 'ERC1155') {
            const contract = new Contract(item.address, ERC1155ABI, signer);
            balance = await contract.balanceOf(address, item.tokenId);
          }

          if (!balance.isZero()) {
            return {
              ...item,
              id: `${item.tokenType}_${item.address}_${item.tokenId || '0'}`,
              balance: balance.toString(),
            };
          }
        } catch (error) {
          console.error('Error checking balance for:', item.address, error);
        }
        return null;
      }));

      setUserNFTs(nftsWithBalance.filter(nft => nft !== null) as WhitelistContract[]);
    };

    fetchUserNFTs();
  }, [chainId, isConnected, address, walletProvider]);

  return (
    <div className="flex flex-col min-h-screen mt-20 bg-gray-100">
      <main className="flex-grow p-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {userNFTs.map((nft) => (
            <div key={nft.id} className="flex flex-col items-center cursor-pointer" onClick={() => navigate(`/dashboard/${nft.address}/${nft.tokenId}`)}>
              <NFTCard
                nft={nft}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;