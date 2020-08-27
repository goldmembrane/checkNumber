import React from "react";
import "./css/GameOver.scss";

const GameOver = (props) => {
  return props.defeat > 2 ? (
    <div className="game-over-box">
      <div className="game-over">Game Over</div>
      <div className="score">your score: {props.score}</div>
      <div className="return-box">
        <span className="temporary">Try again!</span>
        <button className="return" onClick={props.clear}>
          Try again!
        </button>
      </div>
    </div>
  ) : null;
};

export default GameOver;
