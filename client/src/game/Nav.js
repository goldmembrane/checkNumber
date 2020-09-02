import React from "react";
import Calculater from "./Calculater";
import "./css/Nav.scss";
import Popup from "reactjs-popup";
import Description from "./Description";

function setRandomNumber(props) {
  return (
    <div className="setRandomNumber">
      {!props.number ? (
        <div className="setting-box">
          <p>CheckNumber!</p>
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
            <button
              className="btn btn-light"
              onClick={() => {
                props.open();
              }}
            >
              Rank
            </button>
          ) : null}
          <button
            className="settingBtn"
            onClick={() => props.set(props.number)}
          >
            Set Number!
          </button>
        </div>
      ) : null}
      {props.number ? (
        <div>
          {!props.formular ? (
            <div>
              <div className="printNumber">{props.number}</div>
              <button
                className="startBtn"
                onClick={() => {
                  props.create(props.formular);
                }}
              >
                Start!
                <span className="startBtn__inner">
                  <span className="startBtn__blobs">
                    <span className="startBtn__blob"></span>
                    <span className="startBtn__blob"></span>
                    <span className="startBtn__blob"></span>
                    <span className="startBtn__blob"></span>
                  </span>
                </span>
              </button>
            </div>
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
