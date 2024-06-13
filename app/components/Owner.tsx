"use client"

import { useReadContract, useChainId } from "wagmi"
import { abi, address } from "../../constants"

export function Owner() {
  const chainId = useChainId()
  const { data } = useReadContract({
    abi,
    address: address,
    functionName: "getOwner",
    chainId: 31337,
  })
  console.log(chainId)

  return (
    <div>
      Owner <br />
      {`${data}`}
    </div>
  )
}
