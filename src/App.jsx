import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { useStore } from "./store/store";
import "./styles/App.css";
import Confetti from 'react-confetti'

function App() {

  const [confetti, setConfetti] = useState(false);
  const { pointsTeamA, pointsTeamB, maxPoints } = useStore((state) => ({
    pointsTeamA: state.pointsTeamA,
    pointsTeamB: state.pointsTeamB,
    maxPoints: state.listPoints[state.limitIndex],
  }));

  useEffect(() => {
    if (pointsTeamA === maxPoints || pointsTeamB === maxPoints) {
      setConfetti(true);
    } else{
      setConfetti(false);
    }
    if (pointsTeamA === maxPoints) {
      setConfetti(true);
    }else if ( pointsTeamB === maxPoints){
      setConfetti(true);
        alert("Team B wins");
    }
  }, [pointsTeamA, pointsTeamB, maxPoints]);
  return (
      <div style={{width:"100dvw", height:"100%",display:"flex", justifyContent:"start", alignItems:"center", flexDirection:"column ",padding:"2rem"}}>
        {confetti && <Confetti/>}
        <Header />
      </div>
  );
}

export default App;
