import { Header } from "./components/Header";
import "./styles/App.css";

function App() {
  return (
      <div style={{width:"100dvw", height:"100%",display:"flex", justifyContent:"start", alignItems:"center", flexDirection:"column ",padding:"2rem"}}>
        <Header />
      </div>
  );
}

export default App;
