import React from "react";

const Ranking = (props) => {
  return (
    <div className="ranking-slot">
      <div className="rank">
        <div className="rank-username">{props.rank.username}</div>
        <div className="rank-score">{props.rank.score}개</div>
      </div>
    </div>
  );
};

export default Ranking;
