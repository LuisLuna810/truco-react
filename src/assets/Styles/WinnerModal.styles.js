import { useMediaQuery } from "@mui/material";

export const WinnerModalStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    modalContainer: {
      width: "100%",
      height: "100dvh",
      display: "flex",
        flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"rgba(0, 0, 0, 0.6)"
    },
    modalSubTittle: {
      color: "#FFF",
      fontSize: isMobile? "1.8rem":"3rem",
    },
    modalTittle: {
        color: "#FFF",
        fontSize: isMobile? "2.8rem":"4rem",
        fontWeight: "bold",
        animation: "bounce 2s infinite",
      },
    modalButton: {
        marginTop:"2rem",
        fontWeight:"bold"
    }
  };
};
