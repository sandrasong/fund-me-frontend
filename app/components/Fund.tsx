"use client"

import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import { parseEther } from "viem"
import { abi, address } from "../../constants"
import * as React from "react"

export function Fund() {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const value = formData.get("value") as string
    writeContract({
      abi,
      address: address,
      functionName: "fund",
      chainId: 31337,
      value: parseEther(value),
    })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
    chainId: 31337,
  })

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 flex-nowrap">
      <label>ETH amount</label>
      <div className="border border-red-400 rounded-md flex-none w-72 flex flex-row flex-nowrap">
        <input
          name="value"
          placeholder="0.5"
          required
          className="flex-1 py-2 px-2 rounded-l-md focus:outline-none focus:ring-pink-200 focus:ring-inset focus:ring-2"
        />
        <button type="submit" className="bg-[#FF9CAF] font-medium py-2 rounded-r-md w-20 flex-none">
          Fund
        </button>
      </div>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && !isConfirmed && <div>Transaction confirmed.</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </form>
  )
}
