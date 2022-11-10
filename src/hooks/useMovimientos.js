import React from "react";

const useMovimientos = () => {
  const [movimientos, setMovimientos] = React.useState(0);
  const [segundos, setSegundos] = React.useState(0);
  const [minutos, setMinutos] = React.useState(1);
  const [play, setPlay] = React.useState(false);
  const [win, setWin] = React.useState(false);
  const [lose, setLose] = React.useState(false);

  const sumarMovimiento = () => {
    setMovimientos(movimientos + 1);
  };

  const onPlay = () => {
    setPlay(!play);
    setWin(false);
    setLose(false);
    setMinutos(1);
    setSegundos(0);
  };

  return {
    movimientos,
    sumarMovimiento,
    segundos,
    minutos,
    setSegundos,
    setMinutos,
    setMovimientos,
    play,
    setPlay,
    win,
    lose,
    setWin,
    setLose,
    onPlay
  };
};

export default useMovimientos;
