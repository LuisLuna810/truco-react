import { useState } from "react";

export function Nombres() {
  const [teamA, setTeamA] = useState('Team A')
  const [teamB, setTeamB] = useState('Team B')

  return (
    <div className="container w-full pt-2">
      <div className="flex justify-around">
        <div className="text-xl">{teamA}</div>
        <div className="text-xl">{teamB}</div>
      </div>
    </div>
  );
}
