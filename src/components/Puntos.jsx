import { Contador } from "./Contador";
import { dataContext } from "../context/dataContext";
import { useContext } from "react";
export function Puntos() {
  const { pointsA, pointsB } = useContext(dataContext);

  return (
    <div className="container">
      <div className="flex justify-around">
        <div>
          <Contador points={pointsA} team={'A'} />
        </div>
        <div>
          <Contador points={pointsB} team={'B'}/>
        </div>
      </div>
    </div>
  );
}
