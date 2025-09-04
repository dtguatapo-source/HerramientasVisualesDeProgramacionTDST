import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './components/BasicTypes'
import { ClickCounter } from "./components/ClickCounter";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  const [count, setCount] = useState(0)

  // cada componente pinta lo suyo de manera independiente pero todos dentro de la misma pagina 
  //es mi conetenedor priniciapl de react 
  //se importa y organizo los componentes 
  //se exporta para que se renderice dentro de index 
  //renderizar->mostar un codigo simple en elementos visuales reales en la pantalla del nvgador
  return (
    <>
    
      <BasicTypes/>
      <ClickCounter />
      <ProductDetails />
    </>
  )
}

export default App
