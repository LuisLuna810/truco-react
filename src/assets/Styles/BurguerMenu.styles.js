import { useMediaQuery } from "@mui/material";

export const BurguerMenuStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      gap: "1rem",
      position: "absolute",
      width: isMobile ? "60dvw" : "18dvw",
      height: "fit-content",
      backgroundColor: "#FFF",
      zIndex: 1000,
      right: 0,
      top: 0,
      borderTopRightRadius: "1rem",
      borderEndStartRadius: "1rem",
      padding: "1rem 0 3rem 0",
    },
    buttonClose: {
      position: "absolute",
      top: isMobile ? 15 : 15,
      right: 10,
      color: "#000",
      "&:hover": { backgroundColor: "transparent" },
      zIndex: "1000",
    },
    menuButtons: {
      width: "100%",
      fontSize: isMobile ? "1.2rem" : "1.6rem",
      top: 22,
      textTransform: "capitalize",
      color: "#000",
      display: "flex",
      gap: "1rem",
      display: "flex",
      justifyContent: "flex-start",
    },
    buttonsContainer: {
      marginTop: isMobile ? "1rem" : "1.5rem",
      width: "100%",
    },
  };
};
