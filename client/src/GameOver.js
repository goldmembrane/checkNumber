import React from "react";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="game-over-box">
      <div className="game-over">Game Over</div>
      <div className="score">your score: {props.score}</div>
    </div>
  );
};

export default GameOver;
