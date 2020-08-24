import React from "react";
import "./css/Caculater.css";

const Calculater = (props) => {
  return props.number ? (
    <div className="main-box">
      <div className="formular-box">{props.formular}</div>
      <button className="startBtn" onClick={() => props.create(props.formular)}>
        Start!
      </button>
      <button
        className="answer an1"
        onClick={() => {
          props.create(props.formular);
          props.below();
        }}
      >
        낮다
      </button>
      <button
        className="answer"
        onClick={() => {
          props.create(props.formular);
          props.correct();
        }}
      >
        맞다
      </button>
      <button
        className="answer"
        onClick={() => {
          props.create(props.formular);
          props.among();
        }}
      >
        높다
      </button>
    </div>
  ) : null;
};

// isWrong의 갯수가 3이상이면
// game over 창을 띄운다.

export default Calculater;
