import React, { useState, useEffect } from "react";

export const ClickCounter = () => {
  // Estado inicial en 0
  const [count, setCount] = useState<number>(0);

  // useEffect: se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`Número actual de clics: ${count}`);
  }, [count]);

  return (
    <>
      <h2>Ejerciicio 1: Contador de clics</h2>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </>
  );
};
