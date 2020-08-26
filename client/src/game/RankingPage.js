import React from "react";
import Ranking from "./Ranking";
import "./css/RankingPage.css";

const RankingPage = (props) => {
  return (
    <div className={props.isOpen ? "ranking showRanking" : "ranking"}>
      <div className="disappearRanking" onClick={props.open}></div>
      <div className="sidebar">
        <h1>Ranking</h1>
        <hr />
        <Ranking />
      </div>
    </div>
  );
};

export default RankingPage;
