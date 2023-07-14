import React, { useState } from "react";
import { dataContext } from "./dataContext.js";

export const Data = ({ children }) => {
  const [pointsA, setPointsA] = useState(0);
  const [pointsB, setPointsB] = useState(0);

  const handleIncrement = (team) => {
    if (team === "A") {
      setPointsA(pointsA + 1);
    } else if (team === "B") {
      setPointsB(pointsB + 1);
    }
  };

  const handleDecrement = (team) => {
    if (team === "A") {
      if (pointsA > 0) {
        setPointsA(pointsA - 1);
      }
    } else if (team === "B") {
      if (pointsB > 0) {
        setPointsB(pointsB - 1);
      }
    }
  };

  const handleRestart = () => {
    setPointsA(0);
    setPointsB(0);
  };

  return (
    <dataContext.Provider
      value={{
        handleIncrement,
        handleDecrement,
        handleRestart,
        pointsA,
        pointsB,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
