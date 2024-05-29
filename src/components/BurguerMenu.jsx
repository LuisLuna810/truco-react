import { Button } from "@mui/material";
import { BurguerMenuStyles } from "../assets/Styles/BurguerMenu.styles";
import { CloseIcon, RestartIcon, NetworkIcon } from "../assets/svg/Svg";
import { useStore } from "../store/store";
import { useEffect, useRef } from "react";
export const BurguerMenu = () => {
  const styles = BurguerMenuStyles();
  const { setOpenMenu, restartPoints, setLimitPoints, limitIndex, listPoints  } = useStore((state) => ({
    setOpenMenu: state.setOpenMenu,
    restartPoints: state.restartPoints,
    setLimitPoints: state.setLimitPoints,
    listPoints: state.listPoints,
    limitIndex:state.limitIndex
  }));
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu;
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div style={styles.container} ref={menuRef}>
      <Button sx={styles.buttonClose} onClick={setOpenMenu}>
        <CloseIcon />
      </Button>
      <div style={styles.buttonsContainer}>
        <Button sx={styles.menuButtons} onClick={restartPoints} endIcon={<RestartIcon />}>
          Reiniciar
        </Button>
        <Button sx={styles.menuButtons} endIcon={<NetworkIcon />}>
          Crear sesión
        </Button>
        <Button sx={styles.menuButtons} onClick={setLimitPoints} endIcon={<strong style={styles.strong}>{listPoints[limitIndex]}</strong>}>
         Limite de puntaje:
        </Button>
      </div>
    </div>
  );
};
