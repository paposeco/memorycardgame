import React from "react";

const Portraits = function (props) {
  return (
    <div id="collection">
      {props.portraitstodisplay.map((element) => {
        return (
          <div className="heroe" id={element.alias} onClick={props.onclick}>
            <img src={element.module} alt={element.alias} />
            <p className="heroename">{element.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Portraits;
