import { create } from "zustand";

export const useStore = create((set) => ({
  // Set team names
  teamA: "",
  teamB: "",
  teamName: (team, name) =>
    team === "teamA" ? set({ teamA: name }) : set({ teamB: name }),
  // Handling points
  pointsTeamA: 0,
  pointsTeamB: 0,
  incrementPoint: (team) =>
    set((state) => ({
      pointsTeamA: team === "teamA" ? state.pointsTeamA + 1 : state.pointsTeamA,
      pointsTeamB: team === "teamB" ? state.pointsTeamB + 1 : state.pointsTeamB,
    })),
  decrementPoint: (team) =>
    set((state) => ({
      pointsTeamA:
        team === "teamA" && state.pointsTeamA > 0
          ? state.pointsTeamA - 1
          : state.pointsTeamA,
      pointsTeamB:
        team === "teamB" && state.pointsTeamB > 0
          ? state.pointsTeamB - 1
          : state.pointsTeamB,
    })),
  restartPoints: () => set({ pointsTeamA: 0, pointsTeamB: 0 }),
  // Open menu burger
  openMenu: false,
  // Modifica setOpenMenu para aceptar el estado actual y cambiarlo
  setOpenMenu: () => set((state) => ({ openMenu: !state.openMenu })),
}));