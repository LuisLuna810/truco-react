import { Header } from "./components/Header";
import { Nombres } from "./components/Nombres";
import { Puntos } from "./components/Puntos";
import "./styles/App.css";

function App() {
  return (
    <div className="bg-zinc-900 rounded flex flex-col h-full pb-10">
      <Header />
      <Nombres />
      <Puntos />
    </div>
  );
}

export default App;
