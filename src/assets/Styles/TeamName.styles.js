import { useMediaQuery } from "@mui/material";

export const TeamNameStyles = () => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return {
    input :{color: "#FFF",
    textAlign: "center",
    padding: "1rem",
    width: "49.9%",}
  };
};
