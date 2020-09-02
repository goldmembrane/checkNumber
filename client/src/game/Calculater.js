import React from "react";
import "./css/Caculater.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Good from "./Good";
import Bad from "./Bad";

const Calculater = (props) => {
  return props.number ? (
    <div className="main-box">
      <div className="timer">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => props.over()}
          size={150}
          strokeWidth={20}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <div className="formular-box">
        {eval(props.formular) > props.number - 5 &&
        eval(props.formular) < props.number + 5
          ? props.formular
          : props.create(props.formular)}
      </div>
      <button
        className="among"
        onClick={() => {
          props.create(props.formular);
          props.among();
        }}
      >
        <span className="up">{props.number}&#8593;</span>
      </button>
      <button
        className="answer"
        onClick={() => {
          props.create(props.formular);
          props.correct();
        }}
      >
        {props.number}
      </button>
      <button
        className="below"
        onClick={() => {
          props.create(props.formular);
          props.below();
        }}
      >
        <span className="down">{props.number}&#8595;</span>
      </button>

      {props.result === "o" ? (
        <div>
          <Good />
        </div>
      ) : null}
      {props.result === "x" ? (
        <div>
          <Bad />
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Calculater;
