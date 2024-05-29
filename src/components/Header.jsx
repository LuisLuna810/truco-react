import { TeamNames } from "./TeamNames";
import { HeaderStyles } from "../assets/Styles/Header.styles";
import { BurguerMenuIcon, CloseIcon } from "../assets/svg/Svg";
import { Button } from "@mui/material";
import { Points } from "./Points";
import { BurguerMenu } from "./BurguerMenu";
import { useStore } from "../store/store";


export function Header() {
  const styles = HeaderStyles();
  const { openMenu,setOpenMenu} = useStore((state) => ({
    openMenu: state.openMenu,
    setOpenMenu: state.setOpenMenu,
    pointsTeamA: state.pointsTeamA,
    pointsTeamB: state.pointsTeamB,
  }));

  return (
    <>
      
      <div className="bg-zinc-900" style={styles.container} >
        <h1 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>Truco</h1>
        <Button sx={{ color: "#FFF" }} onClick={setOpenMenu}>
          {!openMenu ? <BurguerMenuIcon />:<CloseIcon/>}
        </Button>
      {openMenu? <BurguerMenu/>: <></>}
      </div>
      <div style={styles.divTeams}>
        <TeamNames />
      </div>
      <div style={styles.divPoints}>
        <Points/>
      </div>
    </>
  );
}
