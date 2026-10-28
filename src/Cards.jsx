const Cards = ({ nombre, imagen, likes, onLike }) => {
  return (
    <div
      style={{
        width: "170px",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <img
        src={imagen}
        alt={nombre}
        style={{ width: "100%", height: "170px", objectFit: "cover" }}
      />
      <h3>{nombre}</h3>
      <button
        onClick={onLike}
        style={{
          background: "#4cd964",
          color: "white",
          border: "none",
          padding: "8px 20px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Like {likes}
      </button>
    </div>
  );
};

export default Cards;