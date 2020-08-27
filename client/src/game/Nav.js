import React from "react";
import Calculater from "./Calculater";
import "./css/Nav.css";
import Popup from "reactjs-popup";
import Description from "./Description";

function setRandomNumber(props) {
  return (
    <div className="setRandomNumber">
      <Popup
        trigger={<button className="show-description">설명 보기</button>}
        position="right center"
        modal={true}
        contentStyle={{ maxWidth: "1024px", width: "90%", height: "90%" }}
      >
        {(close) => (
          <div>
            <div className="close-desc" onClick={close}>
              X
            </div>
            <Description close={close} />
          </div>
        )}
      </Popup>
      {!props.isOpen ? (
        <button className="btn btn-light" onClick={props.open}>
          Rank
        </button>
      ) : null}
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
              over={props.over}
              wrong={props.wrong}
              right={props.right}
              result={props.result}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default setRandomNumber;
