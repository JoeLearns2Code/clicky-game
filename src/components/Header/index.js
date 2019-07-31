import React from "react";
import "./style.css";


const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score}
    </div>
    <div className="highscore">
      Top Score: {props.topScore}
    </div>
  </div>
);

export default Header;


