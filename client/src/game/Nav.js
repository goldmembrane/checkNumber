import React from "react";
import Calculater from "./Calculater";
import "./css/Nav.css";

// start 버튼을 누르면 1초 뒤에 div박스에 1부터 9까지의 숫자 중 랜덤한 숫자가 출력된다.

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
          <button
            className="startBtn"
            onClick={() => props.create(props.formular)}
          >
            Start!
          </button>
          <Calculater
            number={props.number}
            create={props.create}
            formular={props.formular}
            correct={props.correct}
            below={props.below}
            among={props.among}
          />
        </div>
      ) : null}
    </div>
  );
}

export default setRandomNumber;
