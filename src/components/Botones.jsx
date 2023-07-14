import suma from "../assets/add.png";
import resta from "../assets/minus.png";
import { dataContext } from "../context/dataContext";
import { useContext } from "react";
export function Botones({team}) {
  const { handleIncrement, handleDecrement } = useContext(dataContext);
  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        className="text-xs bg-slate-700 focus:outline-none"
        onClick={() => {
          handleIncrement(team);
        }}
      >
        <img src={suma} alt="suma" className="w-6 h-6" />
      </button>
      <button
        className="text-xs bg-slate-700 focus:outline-none"
        onClick={() => {
          handleDecrement(team);
        }}
      >
        <img src={resta} alt="resta" className="w-6 h-6" />
      </button>
    </div>
  );
}
