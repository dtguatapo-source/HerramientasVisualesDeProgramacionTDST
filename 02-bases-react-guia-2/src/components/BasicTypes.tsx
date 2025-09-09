import React, { useState } from 'react'

export const BasicTypes = () => {

  const name: string = "tati ಥ_ಥ";
  const age: number = 20;
  //const isActive: boolean = true;
  const [isActive, setIsActive] = useState(true);
// listas
  const names = [
    "🐕 luna ",
    "👦sebas",
    "🧒cristian",
    "👧yeni",
    "💁‍♀️luz",

  ];

 // estructura de Objetos 
  const usuario:string[] = ["Víctor", "María", "Pedro"];
  const user = {
    name: "  🌹🌹 Tatiaana ", //name -->llave //hugo -->vlalor
    age: 20,
    email: "dtatis@gmail.com"
  };

 //return
  return (
    <>
      <div>BasicTypes

      </div>
      <h2>constantes </h2>
      {/*ul>((li>(b+span))*3)   */}
      <ul>
        <div><b>name </b><span>{name}</span></div>
        <div><b>age  </b><span>{age}</span></div>
        <div><b>isActive</b> {isActive ? "usuario actvo" : "usuario Inactivo"}<span></span></div>
      </ul>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "desactivar " : "activar"}
      </button>

      {names[0]}

      <h2>Elementos de la lista - Mapping</h2>
      <ul>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </ul>
      <h2>Mostrar elementos de la lista utilizando join</h2>
      {names.join(", ")}


       {usuario.join(", ")}


      <h2>Object literals</h2>
      <ul>
        <div>Nombre: {user["name"]}</div>
        <div>Edad: {user.age}</div>
        <div>Correo: {user.email}</div>
        <div>activacion : {user.name}</div>
      </ul>

    </>

  )
}

export default BasicTypes
