import { Button } from "@mui/material";
import { MinusIcon, PlusIcon } from "../assets/svg/Svg";
import { useStore } from "../store/store";

export const Buttons = ({team}) => {
    const {incrementPoint, decrementPoint } = useStore((state) => ({
        incrementPoint: state.incrementPoint,
        decrementPoint: state.decrementPoint,
      }));
  return (
      <div style={{display:"flex", flexDirection:"column", gap:"2rem", width:"50%", alignItems:"center"}}>
        <Button onClick={()=>incrementPoint(team)} sx={{width:"fit-content"}}>
          <PlusIcon />
        </Button>
        <Button onClick={()=>decrementPoint(team)} sx={{width:"fit-content"}}>
          <MinusIcon />
        </Button>
      </div>
  );
};
