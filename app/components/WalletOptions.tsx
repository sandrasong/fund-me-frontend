"use client"

import * as React from "react"
import { Connector, useConnect } from "wagmi"

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => connect({ connector })}
      className="rounded-lg border border-transparent px-4 py-3 transition-colors hover:bg-gradient-to-b hover:from-zinc-200  hover:border-gray-400 hover:dark:border-neutral-700"
    >
      {connector.name}
    </button>
  ))
}
