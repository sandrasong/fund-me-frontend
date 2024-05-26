"use client"

import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import { parseEther } from "viem"
import { abi, address } from "../../constants"
import * as React from "react"

export function Withdraw() {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  async function withdraw(e: React.MouseEvent) {
    e.preventDefault()
    writeContract({
      abi,
      address: address,
      functionName: "withdraw",
      chainId: 31337,
    })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
    chainId: 31337,
  })

  return (
    <div>
      <button
        onClick={withdraw}
        className="mt-2 rounded-lg border border-gray-400 px-4 py-3 transition-colors bg-gradient-to-b from-zinc-200"
      >
        Withdraw
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && !isConfirmed && <div>Transaction confirmed.</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </div>
  )
}
