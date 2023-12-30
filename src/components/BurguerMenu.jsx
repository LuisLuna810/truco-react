import { Button } from "@mui/material";
import { BurguerMenuStyles } from "../assets/Styles/BurguerMenu.styles";
import { CloseIcon, RestartIcon, NetworkIcon } from "../assets/svg/Svg";
import { useStore } from "../store/store";
import { useEffect, useRef } from "react";
export const BurguerMenu = () => {
  const styles = BurguerMenuStyles();
  const { openMenu, setOpenMenu, restartPoints, setLimitPoints, limitIndex, listPoints  } = useStore((state) => ({
    openMenu: state.openMenu,
    setOpenMenu: state.setOpenMenu,
    restartPoints: state.restartPoints,
    setLimitPoints: state.setLimitPoints,
    listPoints: state.listPoints,
    limitIndex:state.limitIndex
  }));
  console.log(limitIndex);
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
        <Button sx={styles.menuButtons} onClick={restartPoints}>
          {" "}
          <div
            style={{ width: "4rem", display: "flex", justifyContent: "center" }}
          >
            <RestartIcon />
          </div>
          <span>Reiniciar</span>{" "}
        </Button>
        <Button sx={styles.menuButtons}>
          {" "}
          <div
            style={{ width: "4rem", display: "flex", justifyContent: "center" }}
          >
            <NetworkIcon />
          </div>
          <span>Crear sesión</span>
        </Button>
        <Button sx={styles.menuButtons} onClick={setLimitPoints}>
          {" "}
          <div
            style={{ width: "4rem", display: "flex", justifyContent: "center" }}
          >
            <strong>{listPoints[limitIndex]}</strong>
          </div>
          <span style={{ marginLeft: "0.1rem" }}>Limite de puntaje</span>
        </Button>
      </div>
    </div>
  );
};
