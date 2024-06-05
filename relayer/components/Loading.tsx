export interface LoadingProps {
  text?: string;
}

export const Loading = ({ text }: LoadingProps) => {
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
        {text && <h3>{text}</h3>}
        {!text && <h3>Loading...</h3>}
        <progress></progress>
      </main>
    </>
  );
};
