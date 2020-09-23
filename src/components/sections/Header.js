import React from "react";
import Mobilemenu from "./Mobilemenu";
export default function Header(props) {
  return (
    <header className="header-div flex">
      <div className="flex heading-div">
        <button>Y</button>
        <h1>Hacker News</h1>
        <nav className="flex nav-div">
          <li>new |</li>
          <li>past |</li>
          <li>comments |</li>
          <li>ask |</li>
          <li>show |</li>
          <li>jobs |</li>
          <li>submit </li>
        </nav>
      </div>
      <div className="login-div">
        <h4>login</h4>
      </div>
      <Mobilemenu />
    </header>
  );
}
