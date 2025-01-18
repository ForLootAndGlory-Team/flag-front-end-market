import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from "@reown/appkit/react";
import ChooseNFTFromWhitelist from "../components/web3/choose-nft-from-whitelist";
import getSFUEL from "../web3/helpers/faucet";
import { contractChainSelector } from "../web3/config/constants";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export function Home() {
    const { isConnected, address } = useAppKitAccount()
    const { caipNetwork, chainId } = useAppKitNetwork()
    const { walletProvider } = useAppKitProvider('eip155')
    const [isWaitingFaucet, setIsWaitingFaucet] = useState(false)

    async function checksFuel() {
        if (isConnected && caipNetwork && chainId) {
            console.log('Checking Faucet')
            setIsWaitingFaucet(true)
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider, chainId)
            const signer = ethersProvider.getSigner()
            const balance = await ethersProvider.getBalance(await signer.getAddress())
            console.log('balance : ', Number(balance))
            if (Number(ethers.utils.formatUnits(balance, 18)) < 0.00001) {
                await getSFUEL(await signer.getAddress(), contractChainSelector[chainId].faucet, caipNetwork.rpcUrls.default.http[0])
            } else {
                console.log('Faucet Ok!')
            }
        }
    }

    useEffect(() => {
        if (!isWaitingFaucet) {
            checksFuel()
        }
    }, [isConnected, address, chainId])

    return (
        <div className="flex flex-col min-h-screen mt-20 bg-gray-100">
            <main className="flex-grow p-5">
                <h5>
                    Welcome to FLAG MArketplace
                </h5>
                <ChooseNFTFromWhitelist />
            </main>
        </div>
    )
}

export default Home;