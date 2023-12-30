import { useMediaQuery } from "@mui/material";

export const PointsStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    points: {
      height: "60%",
      width: "100%",
      display: "flex",
      color: "#FFF",
      justifyContent:"center",
      fontSize:isMobile? "6rem": "8rem",
      fontWeight: "bold",
      alignItems: "center",
    },
    span:{
        width:"100%",
        textAlign:"center"
    }
  };
};
