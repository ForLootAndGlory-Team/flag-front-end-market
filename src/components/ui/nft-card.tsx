import { WhitelistContract } from "./whitelist-card";

interface NFTCardProps {
  nft: WhitelistContract;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={nft.imageUrl} alt={nft.title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nft.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{nft.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">Balance : {nft.balance}</p>
      </div>
    </div>
  );
};

export default NFTCard;