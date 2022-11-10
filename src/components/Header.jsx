import React from "react";
import "../styles/Header.css";
import AppContext from "../context/AppContext";
import Button from "./Button";

const Header = () => {
  const { lose, win } = React.useContext(AppContext);

  return (
    <div className="Header">
      <h1>memory</h1>
      {!lose  && <Button />}
    </div>
  );
};

export default Header;
