import { useStore } from "../store/store";
import { TeamNameStyles } from "../assets/Styles/TeamName.styles";

export const TeamNames = () => {
  const { teamA, teamB, teamName } = useStore((state) => ({
    teamA: state.teamA,
    teamB: state.teamB,
    teamName: state.teamName,
  }));

  const styles = TeamNameStyles();
  const handleTeamChange = (team, name) => {
    teamName(team, name);
  };

  console.log(teamA);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        type="text"
        value={teamA}
        onChange={(e) => handleTeamChange("teamA", e.target.value)}
        style={styles.input}
        placeholder="Team A"
      />
      <input
        type="text"
        value={teamB}
        onChange={(e) => handleTeamChange("teamB", e.target.value)}
        style={styles.input}
        placeholder="Team B"
      />
    </div>
  );
};
