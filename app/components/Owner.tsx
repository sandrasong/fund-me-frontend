"use client"

import { useReadContract } from "wagmi"
import { abi, address } from "../../constants"

export function Owner() {
  const { data } = useReadContract({
    abi,
    address: address,
    functionName: "getOwner",
  })

  return <div>{`Owner: ${data}`}</div>
}
