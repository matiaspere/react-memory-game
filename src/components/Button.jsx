import React from 'react';
import "../styles/Header.css";
import AppContext from "../context/AppContext";

const Button = () => {
    const {onPlay, play} = React.useContext(AppContext);
  return (
    <button className='button' onClick={onPlay}>{!play ? "Jugar" : "Reiniciar"}</button>
  )
}

export default Button