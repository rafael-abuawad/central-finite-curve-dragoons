import Image from "next/image";

export interface NFTCardProps {}

export const NFTCard = () => {
  return (
    <article style={{ width: "100%", maxWidth: "550px" }}>
      <header>
        <strong>🐲 CFCD #1</strong>
      </header>
      <div>
        <Image
          src="https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png"
          alt="Picture of the author"
          width={514}
          height={514}
        ></Image>
      </div>
      <footer>
        <button style={{ width: "100%" }}>Claim</button>
      </footer>
    </article>
  );
};
