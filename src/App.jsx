import { Header } from "./components/Header";
import { Nombres } from "./components/Nombres";
import { Puntos } from "./components/Puntos";
import "./styles/App.css";

function App() {
  return (
    <body className="bg-zinc-900 rounded flex flex-col ">
      <Header />
      <Nombres />
      <Puntos />
    </body>
  );
}

export default App;
