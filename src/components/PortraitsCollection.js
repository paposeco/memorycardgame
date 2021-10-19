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
import Portraits from "./Portraits.js";

const PortraitsCollection = function (props) {
  const portraitsarray = [
    { module: ana, alias: "ana", name: "Ana" },
    { module: doomfist, alias: "doomfist", name: "Doomfist" },
    { module: mercy, alias: "mercy", name: "Mercy" },
    { module: reinhardt, alias: "reinhardt", name: "Reinhardt" },
    { module: symmetra, alias: "symmetra", name: "Symmetra" },
    { module: wreckingball, alias: "wreckingball", name: "Wreckingball" },
    { module: ashe, alias: "ashe", name: "Ashe" },
    { module: dva, alias: "dva", name: "D.Va" },
    { module: junkrat, alias: "junkrat", name: "Junkrat" },
    { module: moira, alias: "moira", name: "Moira" },
    { module: roadhog, alias: "roadhog", name: "Roadhog" },
    { module: torbjorn, alias: "torbjorn", name: "Torbjörn" },
    { module: zarya, alias: "zarya", name: "Zarya" },
    { module: baptiste, alias: "baptiste", name: "Baptiste" },
    { module: echo, alias: "echo", name: "Echo" },
    { module: lucio, alias: "lucio", name: "Lúcio" },
    { module: orisa, alias: "orisa", name: "Orisa" },
    { module: sigma, alias: "sigma", name: "Sigma" },
    { module: tracer, alias: "tracer", name: "Tracer" },
    { module: zenyatta, alias: "zenyatta", name: "Zenyatta" },
    { module: bastion, alias: "bastion", name: "Bastion" },
    { module: genji, alias: "genji", name: "Genji" },
    { module: mccree, alias: "mccree", name: "Mccree" },
    { module: pharah, alias: "pharah", name: "Pharah" },
    { module: soldier76, alias: "soldier76", name: "Soldier: 76" },
    { module: widowmaker, alias: "widowmaker", name: "Widowmaker" },
    { module: brigitte, alias: "brigitte", name: "Brigitte" },
    { module: hanzo, alias: "hanzo", name: "Hanzo" },
    { module: mei, alias: "mei", name: "Mei" },
    { module: reaper, alias: "reaper", name: "Reaper" },
    { module: sombra, alias: "sombra", name: "Sombra" },
    { module: winston, alias: "winston", name: "Winston" },
  ];

  const randomIndex = function () {
    const numberOfPortraits = portraitsarray.length;
    return Math.floor(Math.random() * numberOfPortraits);
  };

  const selectPortraits = function () {
    let indexes = [];
    let portraits = [];
    while (indexes.length < 12) {
      const anindex = randomIndex();
      if (indexes.includes(anindex)) {
        continue;
      } else {
        indexes.push(anindex);
        portraits.push(portraitsarray[anindex]);
      }
    }
    return portraits;
  };

  const selectedPortraits = selectPortraits();

  return (
    <Portraits onclick={props.counter} portraitstodisplay={selectedPortraits} />
  );
};

export default PortraitsCollection;
