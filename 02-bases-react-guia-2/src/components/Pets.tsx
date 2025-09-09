import React from "react";

const animals = [
  "🐶 Perro",
  "🐱 Gato",
  "🐰 Conejo",
  "🐦 Pájaro",
  "🐢 Tortuga",
  "🐮vaca"
];

const Pets = () => {
  return (
    <div>
      <h2>Mascotas</h2>
      {animals.map((animal, index) => (
        <div key={index}>{animal}</div>

      ))}

      <h2>Mostrar elementos de la lista utilizando join</h2>
      {animals.join(", ")}
    </div>
    

  );
};

export default Pets;
