"use client"

import { type BaseError, useWaitForTransactionReceipt, useWriteContract, useChainId } from "wagmi"
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
  })

  return (
    <form onSubmit={submit}>
      <input name="value" placeholder="0.5" required />
      <button type="submit">Fund</button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </form>
  )
}
