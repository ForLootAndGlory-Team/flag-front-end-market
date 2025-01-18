import { skaleNebula, skaleNebulaTestnet, type AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Set up metadata
export const metadata = {
    name: 'ForLootAndGlory',
    description: 'Game ForLootAndGlory',
    url: 'https://game.forlootandglory.io',
    icons: ['https://game.forlootandglory.io/favicon.ico']
}

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [skaleNebula,skaleNebulaTestnet] as [AppKitNetwork, ...AppKitNetwork[]]