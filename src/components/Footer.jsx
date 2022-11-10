import React from "react";
import { useEffect, useState } from "react";
import "../styles/Footer.css";
import AppContext from "../context/AppContext";

const Footer = () => {
  const {
    movimientos,
    segundos,
    minutos,
    setMinutos,
    setSegundos,
    setMovimientos,
    play,
    lose,
    win,
  } = React.useContext(AppContext);

  function actualizarCronometro() {
    setSegundos(segundos - 1);

    if (segundos < 1) {
      setSegundos(59);
      setMinutos(minutos - 1);
    }

    if (minutos < 0) {
      setSegundos(0);
      setMinutos(0);
    }
  }

  React.useEffect(() => {
    if (play) {
      if (lose === false) {
        setTimeout(actualizarCronometro, 1000);
      } else {
        setSegundos(0);
        setMinutos(0);
      }
      if (win === false) {
        setTimeout(actualizarCronometro, 1000);
      } else {
        setSegundos(0);
        setMinutos(0);
      }
    } else {
      setMinutos(1);
      setSegundos(0);
      setMovimientos(0);
    }
  }, [segundos, play]);

  return (
    <div className="Footer">
      <div className="tiempo">
        <p>Tiempo</p>
        <h4>
          <p>
            <span>{minutos < 10 ? "0" + minutos : minutos}</span>:
            <span>{segundos < 10 ? "0" + segundos : segundos}</span>
          </p>
        </h4>
      </div>
      <div className="movimientos">
        <p>Movimientos</p>
        <h4>{movimientos < 10 ? "0" + movimientos : movimientos}/30</h4>
      </div>
    </div>
  );
};

export default Footer;

// if (play) {
//   if (minutos >= 0 && segundos >= 0) {
//     setTimeout(actualizarCronometro, 1000);
//   } else {
//     setMinutos(0);
//     setSegundos(0);
//   }
// }
