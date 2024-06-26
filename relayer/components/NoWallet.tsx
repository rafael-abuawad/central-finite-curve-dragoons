import { ConnectKitButton } from "connectkit";

export const NoWallet = () => {
  return (
    <>
      <main
        className="container"
        style={{
          width: "100%",
          height: "80vh",
          display: "grid",
          placeContent: "center",
          placeItems: "start",
        }}
      >
        <hgroup>
          <h2>🐉 Central Finite Curve Dragoons</h2>
          <p>Connect your wallet to proceed to the application.</p>
          <ConnectKitButton />
        </hgroup>
      </main>
    </>
  );
};
