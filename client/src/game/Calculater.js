import React from "react";
import "./css/Caculater.css";
import Timer from "react-compound-timer";
import Good from "./Good";
import Bad from "./Bad";

const Calculater = (props) => {
  return props.number ? (
    <div className="main-box">
      <div className="timer">
        <div className="clock"></div>
        <Timer
          initialTime={62000}
          direction="backward"
          checkpoints={[
            {
              time: 0,
              callback: () => props.over(),
            },
          ]}
        >
          {() => (
            <React.Fragment>
              <Timer.Seconds />
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="formular-box">
        {eval(props.formular) > props.number - 10 &&
        eval(props.formular) < props.number + 10
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
