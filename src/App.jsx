import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { useStore } from "./store/store";
import { WinnerModal } from "./components/WinnerModal";
import "./styles/App.css";

function App() {
  const [winnerSplash, setWinnerSplash] = useState(false);
  const [teamWinner, setTeamWinner] = useState("");
  const { pointsTeamA, pointsTeamB, maxPoints, teamA, teamB, restartPoints} = useStore((state) => ({
    pointsTeamA: state.pointsTeamA,
    pointsTeamB: state.pointsTeamB,
    maxPoints: state.listPoints[state.limitIndex],
    teamA: state.teamA,
    teamB: state.teamB,
    restartPoints: state.restartPoints,
  }));

  useEffect(() => {
    if (pointsTeamA === maxPoints || pointsTeamB === maxPoints) {
      setWinnerSplash(true);
      if (pointsTeamA === maxPoints) {
        setTeamWinner(teamA? teamA : "Team A");
      } else {
        setTeamWinner(teamB?  teamB : "Team B");
      }
    } else {
      setWinnerSplash(false);
    }
    if (pointsTeamA === maxPoints) {
    } else if (pointsTeamB === maxPoints) {
    }
  }, [pointsTeamA, pointsTeamB, maxPoints]);

  return (
    <div
      style={{
        width: "100dvw",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column ",
        padding: "2rem",
        position: "relative",
      }}
    >
      {winnerSplash && <WinnerModal teamWinner={teamWinner} restart={restartPoints} />}
      <Header />
    </div>
  );
}

export default App;
