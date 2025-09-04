import React, { useState } from 'react'

export const BasicTypes = () => {
    
    const name: string = "tati ಥ_ಥ";
   const age: number = 20;
   //const isActive: boolean = true;
   const[isActive, setIsActive]=useState(true);

  return (
    <>
    <div>BasicTypes

    </div>
    <h2>constantes </h2>
    {/*ul>((li>(b+span))*3)   */}
    <ul>
    <li><b>name </b><span>{ name}</span></li>
    <li><b>age  </b><span>{ age}</span></li>
    <li><b>isActive</b> { isActive?"usuario actvo":"usuario Inactivo" }<span></span></li>
    </ul>
    <button onClick={()=> setIsActive(!isActive)}>
        {isActive ? "desactivar ":"activar"}
    </button>


    </>
    
  )
}

export default BasicTypes
