import React, { useState } from 'react'

export const BasicTypes = () => {
  const [name, setName] = useState<string>('TATIANA');
  const [age, setAge] = useState<number>(22);
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <>
      <h3>Basic Types</h3>

      <div> (●'◡'●)</div>

      

      {/* Operador ternario */}
      {isActive ? (
        <ul>
          <li>Nombre: {name}</li>
          <li>Edad: {age}</li>
        </ul>
      ) : (
        <p>Usuario inactivo</p>
      )}

      <h2>Variable normal</h2>
      <button onClick={() => setName(name === 'TATIANA' ? 'derlly' : 'TATIANA')}>
        Modificar nombre
      </button>

      <h2>Variable de estado (age)</h2>
      <button
        onClick={() => {
          setAge(2);
          console.log(`El valor de age es: ${age}`);
        }}
      >
        Modificar Edad
      </button>

      <h2>Estado de actividad</h2>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Desactivar usuario' : 'Activar usuario'}
      </button>
    </>
  );
};
