import { Header } from "./components/Header";
import { Nombres } from "./components/Nombres";
import { Puntos } from "./components/Puntos";
import { Data } from "./context/Data.jsx";
import "./styles/App.css";

function App() {
  return (
    <Data>
      <div className="bg-zinc-900 rounded flex flex-col h-full w-full pb-12">
        <Header />
        <Nombres />
        <Puntos />
      </div>
    </Data>
  );
}

export default App;
