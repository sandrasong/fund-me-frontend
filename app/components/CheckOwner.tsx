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
          className="rounded-sm border border-red-400 px-2 py-2 transition-colors  font-medium hover:bg-[#FFE8ED] hover:text-[#EF4B6D]"
        >
          Check contract owner
        </button>
      )}
    </div>
  )
}
