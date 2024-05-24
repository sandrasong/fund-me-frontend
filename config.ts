import { http, createConfig } from "wagmi"
import { localhost, sepolia } from "wagmi/chains"

export const config = createConfig({
  chains: [localhost, sepolia],
  transports: {
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
})
