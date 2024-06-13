"use client"

import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi"
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
    <div className="text-center">
      <button
        onClick={withdraw}
        className="rounded-sm border border-red-400 px-4 py-3 transition-colors bg-[#FF9CAF] font-medium hover:bg-[#FFE8ED] hover:text-[#EF4B6D]"
      >
        Withdraw
      </button>
      <p className="text-sm mt-1">For contract owner only</p>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && !isConfirmed && <div>Transaction confirmed.</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </div>
  )
}
