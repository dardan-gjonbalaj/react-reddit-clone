import React, { useState } from "react";

import "./styles.scss";

const Vote = (props) => {
  const [score, setScore] = useState(props.score);

  const handleUpvote = () => {
    setScore(score + 1);
  };

  const handleDownvote = () => {
    setScore(score - 1);
  };

  return (
    <div className="vote">
      <button
        className="vote__button vote__button--up"
        type="button"
        onClick={handleUpvote}
      >
        UP
      </button>

      <span className="vote__score">{score}</span>

      <button
        className="vote__button vote__button--down"
        type="button"
        onClick={handleDownvote}
      >
        DOWN
      </button>
    </div>
  );
};

export default Vote;
