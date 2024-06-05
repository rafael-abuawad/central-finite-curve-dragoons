import { cfcdContract } from "@/lib/api/contract";
import Image from "next/image";
import { useReadContracts } from "wagmi";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { CannotClaim } from "./CannotClaim";
import { Soldout } from "./Soldout";

export interface NFTCardProps {
  address: `0x${string}`;
}

interface Attribute {
  trait_type: string;
  value: string | number;
  display_type?: string;
}

interface CFCDMetadata {
  image: string;
  name: string;
  description: string;
  attributes: Attribute[];
}

async function fetchCFCDMetadata(endpoint: string): Promise<CFCDMetadata> {
  const response = await fetch(
    endpoint.replace("ipfs://", "https://ipfs.io/ipfs/"),
  );
  const data = await response.json();
  return {
    image: data.image.replace("ipfs://", "https://ipfs.io/ipfs/"),
    name: data.name,
    description: data.description,
    attributes: data.attributes.map((attr: any) => ({
      trait_type: attr.trait_type,
      value: attr.value,
    })),
  };
}

export const NFTCard = ({ address }: NFTCardProps) => {
  const { data, refetch, isPending } = useReadContracts({
    contracts: [
      {
        ...cfcdContract,
        functionName: "totalSupply",
      },
      {
        ...cfcdContract,
        functionName: "maxSupply",
      },
      {
        ...cfcdContract,
        functionName: "maxBalance",
      },
      {
        ...cfcdContract,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...cfcdContract,
        functionName: "symbol",
      },
    ],
  });
  const [totalSupply, maxSupply, maxBalance, balance, symbol] = data || [];
  const [nextTokenURI, setNextTokenURI] = useState(
    "https://ipfs.io/ipfs/QmYZkmSfbtzYKaZr2iNEjHz3vCWNpLscwkoXpaWiQiMTjJ?filename=0.png",
  );
  const [isLoading, setIsLoading] = useState(false);

  async function claimNFT(address: `0x${string}`) {
    setIsLoading(true);
    await fetch("/api/claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ owner: address }),
    }).finally(() => {
      setIsLoading(false);
      refetch();
    });
  }

  useEffect(() => {
    if (totalSupply && totalSupply.result) {
      (async () => {
        const tokenURI = `ipfs://QmWTPAEgGDhyP1VMNVv6V3tDpfyLxCD9bvdrh6ZXgLjEEj/${totalSupply.result.toString()}`;
        const data = await fetchCFCDMetadata(tokenURI);
        setNextTokenURI(data.image);
      })();
    }
  }, [totalSupply]);

  if (isPending) {
    return <Loading />;
  }

  if (isLoading) {
    return <Loading text="Claiming NFT..." />;
  }

  if (maxBalance?.result == balance?.result) {
    return <CannotClaim maxBalance={maxBalance?.result?.toString() || ""} />;
  }

  if (totalSupply?.result?.toString() == maxSupply?.result?.toString()) {
    return <Soldout />;
  }

  return (
    <article style={{ width: "100%", maxWidth: "550px" }}>
      <header>
        <strong>
          🐲 {symbol?.result} #{totalSupply?.result?.toString()}
        </strong>
      </header>
      <div>
        <Image
          src={nextTokenURI}
          alt="Picture of the author"
          width={514}
          height={514}
        />
      </div>
      <footer>
        <button onClick={() => claimNFT(address)} style={{ width: "100%" }}>
          Claim
        </button>
      </footer>
    </article>
  );
};
