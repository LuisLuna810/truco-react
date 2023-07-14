import { Botones } from "./Botones";
export function Contador({points, team}) {
  return (
    <div className="container">
      <div className="mt-12 h-52 text-8xl">{points}</div>
      <div><Botones team={team}/></div>
    </div>
  );
}
