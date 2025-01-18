export interface WhitelistContract {
  id?: string;
  balance?: string;
  address: string;
  title: string;
  description: string;
  imageUrl: string;
  tokenType: "ERC721" | "ERC1155";
  tokenId?: number;
}

interface WhitelistContractProps {
  whitelist: WhitelistContract;
}

const WhitelistCard: React.FC<WhitelistContractProps> = ({ whitelist }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-gray-700 dark:bg-gray-700">
        <img className="rounded-t-lg" src={whitelist.imageUrl} alt={whitelist.title} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{whitelist.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{whitelist.description}</p>
      </div>
    </div>
  );
};

export default WhitelistCard;