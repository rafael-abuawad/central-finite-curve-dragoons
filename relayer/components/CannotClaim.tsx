import { cfcdContract } from "@/lib/api/contract";
import { ConnectKitButton } from "connectkit";
import { useReadContract } from "wagmi";
import { Loading } from "./Loading";

export const CannotClaim = () => {
  const { data: maxBalance, isPending } = useReadContract({
    ...cfcdContract,
    functionName: "maxBalance",
  });

  if (isPending) {
    return <Loading />;
  }

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
          <p>
            You have reached the limit of <mark>{maxBalance?.toString()}</mark>{" "}
            tokens per holder.
          </p>
          <ConnectKitButton />
        </hgroup>
      </main>
    </>
  );
};
