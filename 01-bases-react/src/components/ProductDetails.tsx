import React, { useState, useEffect } from "react";
//useState-->para guardar estado y useEffect para hacer algo cuando cambian datos
export const ProductDetails = () => {
  // 
  const [showDetails, setShowDetails] = useState<boolean>(false);
 // showDetails comienza en false  -->setShow cambia el valor (true-false)boole que solo acepta verdadero o falso
  // useEffect: cada vez que cambia showDetails



  useEffect(() => {
    if (showDetails) {
      console.log("mostrar  los detalles del producto");
    } else {
      console.log("Se ocultaron los detalles del producto");
    }
  }, [showDetails]);


   //cada vez que cambie el ShowDetarils se ejecuta este bloeuqe 
   //si se muestran detalles se ecribe un mensaje en consola 
   //si  se ocultan detalles escribe otro 

  return (
    <>
      <h2>Ejercicio 2: Mostrar/ocultar detalles</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
      </button> //al hacer click cambia el estado de Showdetails 
      {showDetails && ( //el && si la primera condicion es verdadera, entonces muestra lo que viene despues 
      //si no no muestra nada.
        <ul>
          <li>Nombre: cafe + sandwich de Pollo</li>
          <li>Precio: $12.000</li>
          <li>Descripción: Una deliciosaa merienda casera 
          </li>
        </ul>
      )}
    </>
  );
};
