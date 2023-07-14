import { useState, useEffect, useRef, useContext } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { dataContext } from "../context/dataContext.js";

export function MenuHamburguesa() {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef(null);
  const { handleRestart } = useContext(dataContext);

  function handleClick() {
    setAbierto(!abierto);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAbierto(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="bg-slate-700 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={handleClick}
      >
        <img src={abierto ? close : menu} alt="" className="h-4 w-4" />
      </button>

      <div
        className={`${
          abierto ? "block" : "hidden"
        } absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10`}
      >
        <span
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-lg hover:cursor-pointer"
          onClick={() => {
            handleRestart();
          }}
        >
          Reiniciar
        </span>
        <span className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-lg hover:cursor-pointer ">
          Limite de puntos
        </span>
      </div>
    </div>
  );
}
