import React, { useState, useEffect } from "react";
//useState-->para guardar estado y useEffect para hacer algo cuando cambian datos

export const ClickCounter = () => {
// define y exporta un componente funcional llamado clickcounter 
  const [count, setCount] = useState<number>(0);
 // crea una variable de estado llamada count(valor inicial 0 )
 //setcount -->es la funcion que cambia el count
 //number indica que es typeScript y que count es un numero 
  // useEffect: se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`Número actual de clics: ${count}`);
  }, [count]);//se ejecuta cuando count cambie 

  return (
    <>
    
      <h2>Ejerciicio 1: Contador de clics</h2>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </>
  );
};
