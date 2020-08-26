import React from "react";
import "./css/Description.css";

function description() {
  return (
    <div>
      <img src={require("./image/SetNumber.gif")} alt="set-number-screen" />
      <img
        src={require("./image/CreateFormular.gif")}
        alt="create-formular-screen"
      />
      <img src={require("./image/GameOver.gif")} alt="game-over-screen" />
    </div>
  );
}

export default description;
