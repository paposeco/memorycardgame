import React from "react";

const Scoreboard = function (props) {
  return (
    <div id="scoreboard">
      <p>Score: {props.total}</p>
      <p>Best Score: {props.best}</p>
    </div>
  );
};

export default Scoreboard;
