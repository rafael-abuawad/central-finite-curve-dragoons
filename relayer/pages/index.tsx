import { Header } from "@/components/Header";
import { NFTCard } from "@/components/NFTCard";
import { Web3Provider } from "@/components/Web3Provider";
import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <>
      <Web3Provider>
        <Header>
          <ConnectKitButton />
        </Header>
        <main
          className="container"
          style={{
            width: "100%",
            height: "90vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <NFTCard />
        </main>
      </Web3Provider>
    </>
  );
}
