"use client"
import { Owner } from "./Owner"
import { useState } from "react"

export function CheckOwner() {
  const [ownerChecked, setOwnerChecked] = useState(false)

  return (
    <div>
      {ownerChecked ? (
        <Owner />
      ) : (
        <button
          onClick={() => setOwnerChecked(true)}
          className="rounded-lg border border-gray-400 px-4 py-3 transition-colors bg-gradient-to-b from-zinc-200"
        >
          Check contract owner
        </button>
      )}
    </div>
  )
}
