import restart from "../assets/restart.png";
import { MenuHamburguesa } from "./Hamburguesa";
//import lapiz from "../assets/pencil.png";
export function Header() {
  return (
    <div className="flex flex-col w-full rounded bg-gray-800">
      <div className="grid grid-cols-5 gap-1 text-white py-4 px-6">
        <h1 className="col-span-4 text-2xl text-left font-bold  text-emerald-600">
          Truco
        </h1>
        <div>
        <MenuHamburguesa />
        </div>
      </div>
    </div>
  );
}
