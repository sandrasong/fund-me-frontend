import { http, createConfig, cookieStorage, createStorage } from "wagmi"
import { hardhat, sepolia } from "wagmi/chains"
import { injected, coinbaseWallet } from "wagmi/connectors"

export const config = createConfig({
  chains: [hardhat, sepolia],
  connectors: [injected(), coinbaseWallet()],
  transports: {
    [hardhat.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
