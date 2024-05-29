import { useMediaQuery } from "@mui/material";

export const BurguerMenuStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      position: "absolute",
      width: isMobile ? "100%" : "18dvw",
      height: "fit-content",
      backgroundColor: "#FFF",
      zIndex: 1000,
      right: 0,
      top: 0,
      borderTopRightRadius: "1rem",
      borderEndStartRadius: "1rem",
    },
    buttonClose: {
      display:"flex",
      width:"100%",
      justifyContent: "end",
      padding: "15px 40px 0 0",
      color: "#000",
      "&:hover": { backgroundColor: "transparent" },
      zIndex: "1000",
    },
    buttonsContainer: {
      width: "100%",
      padding: "1rem",
    },
    menuButtons: {
      width: "100%",
      fontSize: isMobile ? "1.4rem" : "1.6rem",
      textTransform: "capitalize",
      color: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },

    strong: {
      fontSize: isMobile ? "1.4rem" : "1.5rem",
    }
  };
};
