import React from "react";
import "./css/GameOver.css";
import { withRouter } from "react-router-dom";

const GameOver = (props) => {
  return props.defeat > 2 ? (
    <div className="game-over-box">
      <div className="game-over">Game Over</div>
      <div className="score">your score: {props.score}</div>
      <button className="return" onClick={props.clear}>
        try again!
      </button>
    </div>
  ) : null;
};

export default withRouter(GameOver);
