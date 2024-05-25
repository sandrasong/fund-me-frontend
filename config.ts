import { http, createConfig, cookieStorage, createStorage } from "wagmi"
import { localhost, sepolia, mainnet } from "wagmi/chains"

export const config = createConfig({
  chains: [mainnet, localhost, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
})
