import React from "react";
import Calculater from "./Calculater";
import "./css/Nav.css";

function setRandomNumber(props) {
  return (
    <div className="setRandomNumber">
      <div className="printNumber">{props.number}</div>
      {!props.number ? (
        <button className="settingBtn" onClick={() => props.set(props.number)}>
          Set Number!
        </button>
      ) : null}
      {props.number ? (
        <div>
          {!props.formular ? (
            <button
              className="startBtn"
              onClick={() => props.create(props.formular)}
            >
              Start!
            </button>
          ) : null}
          {props.formular ? (
            <Calculater
              number={props.number}
              create={props.create}
              formular={props.formular}
              correct={props.correct}
              below={props.below}
              among={props.among}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default setRandomNumber;
