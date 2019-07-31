import React from "react";
import "./style.css";

// function Header(props) {
//   return <h1 className="title">{props.children}</h1>;
  

// }

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


