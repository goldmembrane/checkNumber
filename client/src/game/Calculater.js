import React from "react";
import "./css/Caculater.css";
import Timer from "react-compound-timer";

const Calculater = (props) => {
  return props.number ? (
    <div className="main-box">
      <Timer
        initialTime={60000}
        direction="backward"
        checkpoints={[
          {
            time: 60000,
            callback: () => props.over,
          },
        ]}
      >
        {() => (
          <React.Fragment>
            <Timer.Seconds />
          </React.Fragment>
        )}
      </Timer>
      <div className="formular-box">{props.formular}</div>
      <button
        className="among"
        onClick={() => {
          props.create(props.formular);
          props.among();
        }}
      >
        <span className="up">Up!</span>
      </button>
      <button
        className="answer"
        onClick={() => {
          props.create(props.formular);
          props.correct();
        }}
      >
        Correct!
      </button>
      <button
        className="below"
        onClick={() => {
          props.create(props.formular);
          props.below();
        }}
      >
        <span className="down">Down!</span>
      </button>
    </div>
  ) : null;
};

export default Calculater;
