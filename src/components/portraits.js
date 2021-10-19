import React from "react";
import ana from "../portraits/ana.png";
import doomfist from "../portraits/doomfist.png";
import mercy from "../portraits/mercy.png";
import reinhardt from "../portraits/reinhardt.png";
import symmetra from "../portraits/symmetra.png";
import wreckingball from "../portraits/wreckingball.png";
import ashe from "../portraits/ashe.png";
import dva from "../portraits/dva.png";
import junkrat from "../portraits/junkrat.png";
import moira from "../portraits/moira.png";
import roadhog from "../portraits/roadhog.png";
import torbjorn from "../portraits/torbjorn.png";
import zarya from "../portraits/zarya.png";
import baptiste from "../portraits/baptiste.png";
import echo from "../portraits/echo.png";
import lucio from "../portraits/lucio.png";
import orisa from "../portraits/orisa.png";
import sigma from "../portraits/sigma.png";
import tracer from "../portraits/tracer.png";
import zenyatta from "../portraits/zenyatta.png";
import bastion from "../portraits/bastion.png";
import genji from "../portraits/genji.png";
import mccree from "../portraits/mccree.png";
import pharah from "../portraits/pharah.png";
import soldier76 from "../portraits/soldier76.png";
import widowmaker from "../portraits/widowmaker.png";
import brigitte from "../portraits/brigitte.png";
import hanzo from "../portraits/hanzo.png";
import mei from "../portraits/mei.png";
import reaper from "../portraits/reaper.png";
import sombra from "../portraits/sombra.png";
import winston from "../portraits/winston.png";

const Portraits = function (props) {
  const portraitsarray = [
    { module: ana, alias: "ana" },
    { module: doomfist, alias: "doomfist" },
    { module: mercy, alias: "mercy" },
    { module: reinhardt, alias: "reinhardt" },
    { module: symmetra, alias: "symmetra" },
    { module: wreckingball, alias: "wreckingball" },
    { module: ashe, alias: "ashe" },
    { module: dva, alias: "dva" },
    { module: junkrat, alias: "junkrat" },
    { module: moira, alias: "moira" },
    { module: roadhog, alias: "roadhog" },
    { module: torbjorn, alias: "torbjorn" },
    { module: zarya, alias: "zarya" },
    { module: baptiste, alias: "baptiste" },
    { module: echo, alias: "echo" },
    { module: lucio, alias: "lucio" },
    { module: orisa, alias: "orisa" },
    { module: sigma, alias: "sigma" },
    { module: tracer, alias: "tracer" },
    { module: zenyatta, alias: "zenyatta" },
    { module: bastion, alias: "bastion" },
    { module: genji, alias: "genji" },
    { module: mccree, alias: "mccree" },
    { module: pharah, alias: "pharah" },
    { module: soldier76, alias: "soldier76" },
    { module: widowmaker, alias: "widowmaker" },
    { module: brigitte, alias: "brigitte" },
    { module: hanzo, alias: "hanzo" },
    { module: mei, alias: "mei" },
    { module: reaper, alias: "reaper" },
    { module: sombra, alias: "sombra" },
    { module: winston, alias: "winston" },
  ];

  const randomIndex = function () {
    const numberOfPortraits = portraitsarray.length;
    return Math.floor(Math.random() * numberOfPortraits);
  };

  const getPortrait = function () {
    const index = randomIndex();
    const object = portraitsarray[index];
    return object;
  };

  const selectedPortrait = getPortrait();
  return (
    <div id={selectedPortrait.alias}>
      <img src={selectedPortrait.module} alt="portrait" />
    </div>
  );
};
export default Portraits;
