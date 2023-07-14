import { useState } from "react";
import { Botones } from "./Botones";

export function Contador() {
  const [puntos, setPuntos] = useState(0);

  var handleIncrement = () =>{
    setPuntos(puntos+1)
  }

  var handleDecrement = () =>{
    if (puntos>0) {
        setPuntos(puntos-1)
    }
  }

  return (
    <div className="container">
      <div className="mt-12 h-52 text-8xl">{puntos}</div>
      <div className><Botones handleIncrement={handleIncrement} handleDecrement={handleDecrement}/></div>
    </div>
  );
}
