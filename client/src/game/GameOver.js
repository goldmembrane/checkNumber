import React from "react";
import "./css/GameOver.css";
import Nav from "./Nav";

const GameOver = (props) => {
  return (
    <div className="game-over-box">
      <div className="game-over">Game Over</div>
      <div className="score">your score: {props.score}</div>
      <p className="return">다시 하려면 새로고침 해주세요!</p>
    </div>
  );
};

export default GameOver;
