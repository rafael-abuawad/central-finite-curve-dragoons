import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { fantom } from "viem/chains";

import { cfcdContract } from "@/lib/api/contract";
import { SafeMintParams } from "@/lib/api/types";
import { PRIVATE_KEY, TOKEN_URI } from "@/lib/api/constants";
import { SafeMintSchema } from "@/lib/api/schemas";

const web3Config = { chain: fantom, transport: http() };
const account = privateKeyToAccount(PRIVATE_KEY);
const client = createPublicClient({ ...web3Config });
const wallet = createWalletClient({ ...web3Config, account });

/* Methods */
async function mint(params: SafeMintParams) {
  if (!account) return;

  const { request } = await client.simulateContract({
    ...cfcdContract,
    functionName: "safe_mint",
    account,
    args: [params.owner, TOKEN_URI],
  });
  const hash = await wallet.writeContract(request);
  const tx = await client.waitForTransactionReceipt({ hash, confirmations: 2 });
  return hash;
}

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.post("/claim", zValidator("json", SafeMintSchema), async (c) => {
  const body: SafeMintParams = await c.req.json();
  const hash = await mint(body);
  return c.json({ message: "NFT claimed", hash });
});

app.get("/details", async (c) => {
  const name = await client.readContract({
    ...cfcdContract,
    functionName: 'name',
  })
  const symbol = await client.readContract({
    ...cfcdContract,
    functionName: 'symbol',
  })
  return c.json({
    name,
    symbol
  });
});

export default handle(app);
