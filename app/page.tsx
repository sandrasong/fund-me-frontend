import { ConnectWallet } from "./components/ConnectWallet"
import { ContractBalance } from "./components/ContractBalance"
import { CheckOwner } from "./components/CheckOwner"
import { Fund } from "./components/Fund"
import { Withdraw } from "./components/Withdraw"
import { FunderList } from "./components/FunderList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-md lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-red-200 pb-6 pt-8 lg:static lg:w-auto lg:rounded-2xl lg:border lg:p-4">
          <ContractBalance />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <ConnectWallet />
        </div>
      </div>
      <div className="w-96">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Fund Me Project
        </h1>
        <CheckOwner />
      </div>
      <Fund />
      <Withdraw />
      <FunderList />
    </main>
  )
}
