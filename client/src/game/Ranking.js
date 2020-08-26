import React from "react";
import "./css/Ranking.css";

const Ranking = (props) => {
  return (
    <div className="ranking-slot">
      <div className="rank 1st"></div>
      <div className="rank 2nd"></div>
      <div className="rank 3rd"></div>
      <div className="rank 4th"></div>
      <div className="rank 5th"></div>
      <div className="rank 6th"></div>
      <div className="rank 7th"></div>
      <div className="share">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Ranking;
