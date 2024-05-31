import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Web3Provider } from "@/components/Web3Provider";
import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <>
      <Web3Provider>
        <Header>
          <ConnectKitButton />
        </Header>
        <Container />
        <Footer />
      </Web3Provider>
    </>
  );
}
