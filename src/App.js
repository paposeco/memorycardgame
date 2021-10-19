//import logo from './logo.svg;
import React, { useState, useEffect } from "react";
import PortraitsCollection from "./components/PortraitsCollection.js";
import Scoreboard from "./components/Scoreboard.js";

const App = function (props) {
  const [count, setCount] = useState(0);
  const [clickedPortraits, setClickedPortraits] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const updateCounter = function (event) {
    const clicked = event.target.alt;
    if (clickedPortraits.includes(clicked)) {
      if (count > bestScore) {
        setBestScore(count);
      }
      setCount(0);
      setClickedPortraits([]);
      alert("You clicked the same portrait twice. Better luck next time!");
    } else {
      setCount(count + 1);
      setClickedPortraits(clickedPortraits.concat(clicked));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Overwatch Memory Game</h1>
        <h3>
          Can you click on all 33 Overwatch Heroes without clicking on the same
          portrait twice? Start clicking to find out.
        </h3>
      </header>
      <div id="main">
        <PortraitsCollection counter={updateCounter} />
        <Scoreboard total={count} best={bestScore} />
      </div>
      <footer>
        <a href="https:github.com/paposeco/" alt="github">
          <span>
            <i className="lab la-github"></i>
          </span>
          Fabi
        </a>
      </footer>
    </div>
  );
};

export default App;
