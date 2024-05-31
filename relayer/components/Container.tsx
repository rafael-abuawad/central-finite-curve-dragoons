"use client";
import { useAccount } from "wagmi";
import { useIsMounted } from "connectkit";
import { NoWallet } from "./NoWallet";
import { NFTCard } from "./NFTCard";

export const Container = () => {
  const isMounted = useIsMounted();
  const { isConnected, address } = useAccount();

  if (!isMounted) {
    return null;
  }

  if (!isConnected || address === undefined) {
    return <NoWallet />;
  }

  return (
    <>
      <main className="container">
        <div
          className="container"
          style={{
            width: "100%",
            height: "80vh",
            display: "grid",
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <NFTCard address={address!} />
        </div>
      </main>
    </>
  );
};
