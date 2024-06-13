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
        className="mt-2 rounded-sm border border-red-400 px-4 py-2 font-medium hover:bg-[#FFE8ED] hover:text-[#EF4B6D]"
      >
        Disconnect
      </button>
    </div>
  )
}
