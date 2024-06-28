This project uses [Next.js](https://nextjs.org/), [wagmi](https://wagmi.sh/) and [tailwindcss](https://tailwindcss.com/)  to create the Fund Me front end.

## Deploy the contract and run the localhost

First, run the hardhat server in the Fund-Me-Contract folder:

```bash
npx hardhat node
```

Then, add a testing account to a browser wallet such as Metamask or Phantom. You can find all testing accounts in your terminal after deploying the hardhat node. 

Don't forget to change the FundMe contract `address` in `constants > index.ts`

Last, run the frontend server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshot
![fond me frontend screenshot for readme](https://github.com/sandrasong/fund-me-frontend/assets/11672986/5996e3b2-5d5c-4632-95af-d8a38e796cd4)
