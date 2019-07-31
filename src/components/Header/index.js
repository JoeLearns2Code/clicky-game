import React from "react";
import "./style.css";


const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score}
    </div>
    <div className="highscore">
      Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;


