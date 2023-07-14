import { Contador } from "./Contador";

export function Puntos() {
  return (
    <div className="container">
      <div className="flex justify-around">
        <div>
          <Contador />
        </div>
        <div>
          <Contador />
        </div>
      </div>
    </div>
  );
}
