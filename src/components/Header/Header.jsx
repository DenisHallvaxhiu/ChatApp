import "./Header.css";

import React from "react";

export default function Header(props) {
  return (
    <header>
      <img src={props.user.image} alt="" />
      <div>
        <h4>{props.user.name}</h4>
        <span>online</span>
      </div>
    </header>
  );
}
