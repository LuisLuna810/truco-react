import React, { useState } from 'react';

export function Nombres() {
  const [teamA, setTeamA] = useState("Team A");
  const [teamB, setTeamB] = useState("Team B");
  const [editingTeam, setEditingTeam] = useState(null);

  const handleTeamAClick = () => {
    setEditingTeam('A');
  };

  const handleTeamBClick = () => {
    setEditingTeam('B');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (editingTeam === 'A') {
      setTeamA(value.substring(0, 10));
    } else if (editingTeam === 'B') {
      setTeamB(value.substring(0, 10));
    }
  };

  const handleInputBlur = () => {
    setEditingTeam(null);
    if (teamA === "") {
      setTeamA("Team A");
    }
    if (teamB === "") {
      setTeamB("Team B");
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleInputBlur();
    }
  };

  return (
    <div className="container w-full pt-2">
      <div className="flex justify-around">
        <div className="text-xl">
          {editingTeam === 'A' ? (
            <input
              type="text"
              value={teamA}
              maxLength={10}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              autoFocus
            />
          ) : (
            <span onClick={handleTeamAClick}>{teamA}</span>
          )}
        </div>
        <div className="text-xl">
          {editingTeam === 'B' ? (
            <input
              type="text"
              value={teamB}
              maxLength={10}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              autoFocus
            />
          ) : (
            <span onClick={handleTeamBClick}>{teamB}</span>
          )}
        </div>
      </div>
    </div>
  );
}