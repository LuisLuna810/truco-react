import { PointsStyles } from "../assets/Styles/Points.styles";
import { useStore } from "../store/store";
import { Buttons } from "./Buttons";


export const Points = () => {
  const { pointsTeamA, pointsTeamB, maxPoints } = useStore((state) => ({
    pointsTeamA: state.pointsTeamA,
    pointsTeamB: state.pointsTeamB,
    maxPoints: state.listPoints[state.limitIndex],
  }));
  const styles = PointsStyles();
  return (
    <>
      <div style={styles.points}>
        <span style={styles.span}>{pointsTeamA}</span>
        <span style={styles.span}>{pointsTeamB}</span>
      </div>
      <div style={styles.points}>
        <Buttons team={"teamA"} />
        <Buttons team={"teamB"} />
      </div>
    </>
  );
};
