import { useState } from "react";
import Cards from "./Cards";

const presidentes = [
  { id: 1, nombre: "Evo Morales", imagen: "/evo.jpg" },
  { id: 2, nombre: "Luis Arce", imagen: "/arce.jpg" },
  { id: 3, nombre: "Rodrigo Paz", imagen: "/paz.webp" },
];

const Listas = () => {
  const [likes, setLikes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [busqueda, setBusqueda] = useState("");

  const darLike = (id) => {
    setLikes({ ...likes, [id]: likes[id] + 1 });
  };

  const total = Object.values(likes).reduce((a, b) => a + b, 0);

  const filtrados = presidentes.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Total de likes de presidentes: {total}</h1>

      <input
        type="text"
        placeholder="Ingrese nombre de un presidente"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: "280px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "24px",
        }}
      />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtrados.map((p) => (
          <Cards
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            likes={likes[p.id]}
            onLike={() => darLike(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Listas;