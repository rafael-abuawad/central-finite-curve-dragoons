import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

export const NoWallet = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <></>;
  }

  return (
    <>
      <main className="container">
        <hgroup>
          <h2>🐉 Central Finite Curve Dragoons</h2>
          <p>Connect your wallet to proceed to the application.</p>
        </hgroup>
        <ConnectKitButton />
      </main>
    </>
  );
};
