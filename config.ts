import { http, createConfig, cookieStorage, createStorage } from "wagmi"
import { localhost, sepolia, mainnet } from "wagmi/chains"
import { injected, coinbaseWallet } from "wagmi/connectors"

export const config = createConfig({
  chains: [mainnet, localhost, sepolia],
  connectors: [injected(), coinbaseWallet()],
  transports: {
    [mainnet.id]: http(),
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
