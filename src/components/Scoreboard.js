import React from "react";

const Scoreboard = function (props) {
  return (
    <div id="scoreboard">
      <h2>Score: {props.total}</h2>
      <h2>Best Score: {props.best}</h2>
    </div>
  );
};

export default Scoreboard;
