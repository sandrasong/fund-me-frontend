"use client"

import { useBalance } from "wagmi"
import { address } from "../../constants"

export function ContractBalance() {
  const { data } = useBalance({
    address: address,
    chainId: 31337,
  })

  return (
    <>
      Contract balance: {data?.formatted} {data?.symbol}
    </>
  )
}
