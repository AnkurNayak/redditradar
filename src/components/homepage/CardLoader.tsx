const CardLoader = () => {
  return (
    <div
      style={{
        marginTop: "32px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        position: "relative",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default CardLoader;
