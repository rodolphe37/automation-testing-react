const CardContainer = ({ children }) => {
  return (
    <div
      className="container"
      style={{ background: "#fff", padding: 20, color: "black" }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
