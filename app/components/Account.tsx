"use client"

import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from "wagmi"

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
  const { data, isError, isLoading } = useBalance({
    address: address,
    chainId: 31337,
  })

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      {isError && <div>Error fetching balance</div>}
      <div>
        {" "}
        Balance: {data?.formatted} {data?.symbol}{" "}
      </div>
      <button
        onClick={() => disconnect()}
        className="mt-2 rounded-lg border border-gray-400 px-4 py-3 transition-colors bg-gradient-to-b from-zinc-200"
      >
        Disconnect
      </button>
    </div>
  )
}
