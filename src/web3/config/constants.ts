import { skaleNebula, skaleNebulaTestnet } from "@reown/appkit/networks"

// TESTNET
import AssetsTestnet from '../contracts/testnet/assets'
import MarketplaceTestnet from '../contracts/testnet/proxy-multi'

// MAINNET
import AssetsMainnet from '../contracts/mainnet/assets'
import MarketplaceMainnet from '../contracts/mainnet/proxy-multi'

export const CONTRACT_PAYER_TESTNET_NEBULA = '0x000E9c53C4e2e21F5063f2e232d0AA907318dccb'
export const CONTRACT_PAYER_MAINNET_NEBULA = '0x5a6869ef5b81DCb58EBF51b8F893c31f5AFE3Fa8'

export const contractsMainnet = {
    faucet: CONTRACT_PAYER_MAINNET_NEBULA,
    assets: AssetsMainnet,
    marketplace: MarketplaceMainnet
}
export const contractsTestnet = {
    faucet: CONTRACT_PAYER_TESTNET_NEBULA,
    assets: AssetsTestnet,
    marketplace: MarketplaceTestnet
}

interface ContractMap {
    [key: number | string]: any;
}

export const contractChainSelector: ContractMap = {
    [skaleNebulaTestnet.id]: contractsTestnet,
    [skaleNebula.id]: contractsMainnet,
};

// Marketplace
export const MARKETPLACE_ENABLED = true;
export const FEES = 0.05;
export const ORDER_DURATION = 720; // hours => 30 jours
export const ORDERBOOK_API_URL = 'http://localhost:5000' // 'https://api.forlootandglory.io'; //TODO: PROD
export const CHAIN_ID = '1482601649';
export const pinataGatewayUrl = "https://forlootandglory.mypinata.cloud"

export const ERC1155 = {
    COPPER_COIN: 0,
    SILVER_COIN: 1,
    GOLD_COIN: 2,
    BRONZE_CHEST: 3,
    SILVER_CHEST: 4,
    GOLD_CHEST: 5,
    COMPASS: 6,
    BOTTLE: 7,
    COMMON_MAP: 8,
    RARE_MAP: 9,
    LEGENDARY_MAP: 10,
    TICKET_PIRATE: 11,
    TICKET_CORSAIR: 12,
    TICKET_SMUGGLER: 13
}

export interface WhitelistContract {
    address: string;
    title: string;
    description: string;
    imageUrl: string;
    tokenType: 'ERC721' | 'ERC1155';
    metadataType: 'collectible' | 'custom' | 'coins';
    tokenId?: number;
}

export const fetchWhitelist = (chainId: string | number): WhitelistContract[] => {
    return [
        { address: contractChainSelector[chainId].assets.nftCollectibleAddress, title: 'Recruiter', description: 'NFT Recruiter', imageUrl: `/assets/collectibles/collectible_800x600.png`, tokenType: 'ERC721', metadataType: 'collectible' },
        { address: contractChainSelector[chainId].assets.nftTavernAddress, title: 'Tavern', description: 'Tavern Building', imageUrl: '/assets/buildings/tavern_800x600.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftBrothelAddress, title: 'Brothel', description: 'Brothel Building', imageUrl: '/assets/buildings/brothel_800x600.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftForgesAddress, title: 'Forge', description: 'Forge Building', imageUrl: '/assets/buildings/forge_800x600.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftShipyardsAddress, title: 'Shipyard', description: 'Shipyard Building', imageUrl: '/assets/buildings/shipyard_800x600.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftCharacterAddress, title: 'Character', description: 'Playable Character', imageUrl: '/assets/characters/pirate.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftShipAddress, title: 'Ship', description: 'Playable Ship', imageUrl: '/assets/ships/caravel.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftGearAddress, title: 'Gear', description: 'Character Gear', imageUrl: '/assets/misc/gear.png', tokenType: 'ERC721', metadataType: 'custom' },
        { address: contractChainSelector[chainId].assets.nftStuffAddress, title: 'Stuff', description: 'Ship Stuff', imageUrl: '/assets/ships/squarerig.png', tokenType: 'ERC721', metadataType: 'custom' },
        // ERC1155
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Coin Coppper', description: 'Coin Coppper', imageUrl: `/assets/token/coin_copper.png`, tokenType: 'ERC1155', tokenId: ERC1155.COPPER_COIN, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Coin Silver', description: 'Coin Silver', imageUrl: '/assets/token/coin_silver.png', tokenType: 'ERC1155', tokenId: ERC1155.SILVER_COIN, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Coin Gold', description: 'Coin Gold', imageUrl: '/assets/token/coin_golden.png', tokenType: 'ERC1155', tokenId: ERC1155.GOLD_COIN, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Chest Bronze', description: 'Chest Bronze', imageUrl: '/assets/token/chest_common.png', tokenType: 'ERC1155', tokenId: ERC1155.BRONZE_CHEST, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Chest Silver', description: 'Chest Silver', imageUrl: '/assets/token/chest_rare.png', tokenType: 'ERC1155', tokenId: ERC1155.SILVER_CHEST, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Chest Legendary', description: 'Chest Legendary', imageUrl: '/assets/token/chest_legendary.png', tokenType: 'ERC1155', tokenId: ERC1155.GOLD_CHEST, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Compass', description: 'Compass', imageUrl: '/assets/items/compass_800x600.png', tokenType: 'ERC1155', tokenId: ERC1155.COMPASS, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Rum Bottle', description: 'Rum Bottle', imageUrl: '/assets/token/bottle.png', tokenType: 'ERC1155', tokenId: ERC1155.BOTTLE, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Map Common', description: 'Map Common', imageUrl: '/assets/token/map_common.png', tokenType: 'ERC1155', tokenId: ERC1155.COMMON_MAP, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Map Rare', description: 'Map Rare', imageUrl: '/assets/token/map_rare.png', tokenType: 'ERC1155', tokenId: ERC1155.RARE_MAP, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Map Legendary', description: 'Map Legendary', imageUrl: '/assets/token/map_legendary.png', tokenType: 'ERC1155', tokenId: ERC1155.LEGENDARY_MAP, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Ticket Pirate', description: 'Ticket Pirate', imageUrl: '/assets/token/ticket_pirate.png', tokenType: 'ERC1155', tokenId: ERC1155.TICKET_PIRATE, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Ticket Corsair', description: 'Ticket Corsair', imageUrl: '/assets/token/ticket_corsair.png', tokenType: 'ERC1155', tokenId: ERC1155.TICKET_CORSAIR, metadataType: 'coins' },
        { address: contractChainSelector[chainId].assets.TheTreasureSeaAddress, title: 'Ticket Smuggler', description: 'Ticket Smuggler', imageUrl: '/assets/token/ticket_smuggler.png', tokenType: 'ERC1155', tokenId: ERC1155.TICKET_SMUGGLER, metadataType: 'coins' },
    ];
}