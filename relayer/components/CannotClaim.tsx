export type CannotClaimProps = {
  maxBalance: string;
};

export const CannotClaim = ({ maxBalance }: CannotClaimProps) => {
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
            You have reached the limit of <mark>{maxBalance}</mark> tokens per
            holder.
          </p>
        </hgroup>
      </main>
    </>
  );
};
