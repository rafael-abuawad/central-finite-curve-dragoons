export const Loading = () => {
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
        <h3>Loading...</h3>
        <progress></progress>
      </main>
    </>
  );
};
