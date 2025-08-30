import React, { useState, useEffect } from "react";

export const ProductDetails = () => {
  // Estado para mostrar/ocultar
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // useEffect: cada vez que cambia showDetails
  useEffect(() => {
    if (showDetails) {
      console.log("Se muestran los detalles del producto");
    } else {
      console.log("Se ocultaron los detalles del producto");
    }
  }, [showDetails]);

  return (
    <>
      <h2>Ejercicio 2: Mostrar/ocultar detalles</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
      </button>

      {showDetails && (
        <ul>
          <li>Nombre: cafe + sandwich de Pollo</li>
          <li>Precio: $12.000</li>
          <li>Descripción: Una deliciosa merienda casera 
            
          </li>
        </ul>
      )}
    </>
  );
};
