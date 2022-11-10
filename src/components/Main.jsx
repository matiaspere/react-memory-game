import React from "react";
import "../styles/Main.css";
import Card from "./Card";
import { barajarTarjetas, comparar } from "../utils/functions";
import AppContext from "../context/AppContext";
import Lose from "./Lose";
import Win from "./Win";
import Home from "./Home";

const Main = () => {
  const {
    movimientos,
    sumarMovimiento,
    segundos,
    minutos,
    setMinutos,
    setSegundos,
    play,
    win,
    lose,
    setWin,
    setLose,
    setPlay,
  } = React.useContext(AppContext);

  const totalTarjetas = [
    { image: "👽​", descubierta: false, id: 1, acertada: false },
    { image: "🎮​", descubierta: false, id: 2, acertada: false },
    { image: "🏓​", descubierta: false, id: 3, acertada: false },
    { image: "🎳​", descubierta: false, id: 4, acertada: false },
    { image: "🧨​", descubierta: false, id: 5, acertada: false },
    { image: "🐼​", descubierta: false, id: 6, acertada: false },
    { image: "🍰​", descubierta: false, id: 7, acertada: false },
    { image: "🍪​", descubierta: false, id: 8, acertada: false },
    { image: "👽​", descubierta: false, id: 9, acertada: false },
    { image: "🎮​", descubierta: false, id: 10, acertada: false },
    { image: "🏓​", descubierta: false, id: 11, acertada: false },
    { image: "🎳​", descubierta: false, id: 12, acertada: false },
    { image: "🧨​", descubierta: false, id: 13, acertada: false },
    { image: "🐼​", descubierta: false, id: 14, acertada: false },
    { image: "🍰​", descubierta: false, id: 15, acertada: false },
    { image: "🍪​", descubierta: false, id: 16, acertada: false },
  ];

  let tarjetasBarajadas = barajarTarjetas(totalTarjetas);
  const [cards, setCards] = React.useState(tarjetasBarajadas);

  React.useEffect(() => {
    tarjetasBarajadas = barajarTarjetas(totalTarjetas);
    setCards(tarjetasBarajadas);
  }, [play]);

  const onDescubrir = (card) => {
    let totalDescubiertas = cards.filter(
      (card) => card.descubierta === true && card.acertada === false
    );
    if (play & (totalDescubiertas.length < 2)) {
      const newCards = [...cards];
      const index = newCards.findIndex((tarjeta) => tarjeta.id === card.id);
      newCards[index].descubierta = true;
      setCards(newCards);
    }
  };

  // logica para comparar 2 cartas y determinar si son iguales o no
  React.useEffect(() => {
    let totalDescubiertas = cards.filter(
      (card) => card.descubierta === true && card.acertada === false
    );

    if (totalDescubiertas.length > 1) {
      sumarMovimiento();
      if (totalDescubiertas[0].image === totalDescubiertas[1].image) {
        totalDescubiertas[0].acertada = true;
        totalDescubiertas[1].acertada = true;
      } else {
        setTimeout(() => {
          totalDescubiertas[0].descubierta = false;
          totalDescubiertas[1].descubierta = false;
        }, 500);
      }
    }
  }, [cards]);

  // logica para determinar si hubo victoria o derrota
  React.useEffect(() => {
    let tarjetasPendientes = cards.filter((card) => card.acertada === false);
    if (
      (movimientos > 19) & (tarjetasPendientes.length > 0) ||
      (minutos === 0) & (segundos === 0) & (win === false)
    ) {
      setLose(true);
      setMinutos(0);
      setSegundos(0);
    }
    if (tarjetasPendientes.length === 0) {
      setWin(true);
      setMinutos(0);
      setSegundos(0);
    }
  }, [segundos]);

  

  React.useEffect(() => {
    cards.map((card) => {
      card.descubierta = false;
      card.acertada = false;
    });
  }, [play]);
  return (
    <>
      {!play && <Home />}
      {lose && <Lose />}
      {win && <Win />}
      <div className="mesa">
        {!lose & !win &&
          cards.map((card) => (
            <Card card={card} onDescubrir={onDescubrir} key={card.id} />
          ))}
      </div>
    </>
  );
};

export default Main;
