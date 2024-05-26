"use client"

import { type UseWatchContractEventReturnType, useWatchContractEvent } from "wagmi"
import { formatEther } from "viem"
import { abi, address } from "../../constants"
import * as React from "react"
import { useState } from "react"

type Funder = {
  from: any
  amount: string
}

export function FunderList() {
  const [funderList, setFunderList] = useState<Funder[]>([])
  const [latestEventHash, setLatestEventHash] = useState<`0x${string}` | null>()

  useWatchContractEvent({
    address: address,
    abi,
    chainId: 31337,
    eventName: "Funded",
    onError(error) {
      console.log("Error", error)
    },
    onLogs(logs) {
      const { from, amount } = logs[0].args
      const ethAmount = formatEther(amount)
      const eventHash = logs[0].transactionHash
      if (eventHash !== latestEventHash) {
        setLatestEventHash(eventHash)
        setFunderList([{ from: from, amount: ethAmount }, ...funderList])
      }
    },
  })

  const funderItems = funderList.map((funder, index) => {
    return (
      <li key={index}>
        {funder.amount} is funded by <br />
        {funder.from}
      </li>
    )
  })

  return <ul>{funderItems}</ul>
}
