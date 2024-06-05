"use client";
import { WagmiProvider, createConfig } from "wagmi";
import { fantom } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Chains
    chains: [fantom],

    // Required API Keys
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required App Info
    appName: "Central Finite Curve Dragoons",

    // Optional App Info
    appDescription: "Central Finite Curve Dragoons NFTs",
    appUrl: "https://central-finite-curve-dragoons-4mm6-qv8qjk7um.vercel.app/", // your app's url
    appIcon: "https://central-finite-curve-dragoons-4mm6-qv8qjk7um.vercel.app/images/dragon-face.webp", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    ssr: true,
  }),
);

const queryClient = new QueryClient();

export interface Web3ProviderProps {
  children: React.ReactNode;
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
