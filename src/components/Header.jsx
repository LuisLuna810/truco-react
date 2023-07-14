import restart from "../assets/restart.png";
import { MenuHamburguesa } from "./Hamburguesa";
export function Header() {
    
  return (
    <div className="flex flex-col w-full rounded bg-gradient-to-r to-cyan-500 from-blue-500">
      <div className="grid grid-cols-5 gap-1 text-white py-4 px-6">
        <h1 className="col-span-4 text-2xl text-left font-bold  ">
          Truco
        </h1>
        <div>
        <MenuHamburguesa />
        </div>
      </div>
    </div>
  );
}
