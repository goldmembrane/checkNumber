import React from "react";
import "./css/GameOver.scss";

const GameOver = (props) => {
  return props.defeat > 2 ? (
    <div className="game-over-box">
      <div className="game-over">Game Over</div>
      <div className="score">your score: {props.score}</div>
      <div className="save-box">
        <span className="save-temporary">Save score!</span>
        <button
          className="save"
          onClick={(e) => {
            e.preventDefault();
            fetch("http://localhost:8000/rank/post", {
              method: "POST",
              body: JSON.stringify({ score: props.score }),
              credentials: "include",
              headers: {
                "Content-type": "application/json",
              },
            })
              .then((res) => {
                if (res.status === 201) {
                  console.log("Save Success");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Save score!
        </button>
      </div>
      <div className="return-box2">
        <span className="temporary2">Try again!</span>
        <button className="return" onClick={props.clear}>
          Try again!
        </button>
      </div>
    </div>
  ) : null;
};

export default GameOver;
