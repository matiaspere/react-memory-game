import React from "react";
import "../styles/Main.css";

const Card = ({ card, onDescubrir }) => {
  return (
    <>
      {!card.acertada ? (
        <div
          className={!card.descubierta ? "tarjeta" : "tarjeta descubierta"}
          onClick={() => onDescubrir(card)}
        >
          <p className="tarjeta__contenido">{card.image}</p>
        </div>
      ) : (
        <div>
          <p className="acertada tarjeta__contenido">{card.image}</p>
        </div>
      )}
    </>
  );
};

export default Card;
