import { createAppKit } from '@reown/appkit/react'

import { projectId, metadata, networks, } from './web3/config'
import AppRouter from './route/router'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'

const generalConfig = {
  projectId,
  metadata,
  networks
}

// Create modal
createAppKit({
  adapters: [new Ethers5Adapter()],
  ...generalConfig,
})

export function App() {
  return (
        <AppRouter />
  )
}

export default App