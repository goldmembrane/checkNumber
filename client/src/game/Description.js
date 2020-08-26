import React from "react";
import "./css/Description.css";

function description() {
  return (
    <div>
      <div className="setNumberbox">
        <img
          className="setNumbergif"
          src={require("./image/SetNumber.gif")}
          alt="set-number-screen"
        />
        <p className="setNumberDescription">
          set Number! 버튼을 누르면 랜덤으로 숫자가 지정되고 start 버튼이
          나타납니다.
        </p>
      </div>
      <div className="createFormularbox">
        <img
          className="createFormulargif"
          src={require("./image/CreateFormular.gif")}
          alt="create-formular-screen"
        />
        <p className="createFormularDescription">
          start 버튼을 누르면 계산식이 출력 되면서 게임이 시작됩니다.
        </p>
      </div>
      <div className="gameoverbox">
        <img
          className="gameovergif"
          src={require("./image/GameOver.gif")}
          alt="game-over-screen"
        />
        <p className="gameoverDescription">
          지정된 숫자를 기준으로 계산식의 값을 판별해 보세요. 3번 이상 틀리면
          게임오버입니다!
        </p>
      </div>
    </div>
  );
}

export default description;
