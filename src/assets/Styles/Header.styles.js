import { useMediaQuery } from "@mui/material";

export const HeaderStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    container: {
      width: isMobile ? "90dvw" : "50dvw",
      borderTopRightRadius: "1rem",
      borderTopLeftRadius: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.4rem",
      position:"relative"
    },
    divTeams: {
      width: isMobile ? "90dvw" : "50dvw",
    },
    divPoints: {
      height: "70dvh",
      backgroundColor: "rgb(24 24 27)",
      width: isMobile ? "90dvw" : "50dvw",
      display: "flex",
      flexDirection: "column",
      position:"relative",
      borderEndStartRadius:"1.6rem",
      borderEndEndRadius:"1.6rem"
    },
  };
};
