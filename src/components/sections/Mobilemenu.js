import React from "react";

export default function Mobilemenu(props) {
  return (
    <div className="media-menu-div">
      <label className="hamburger" htmlFor="toggle">
        &#9776;
      </label>
      <input type="checkbox" name="" id="toggle" className="toggle" />
      <nav className="media-nav-links">
        <div>
          <li>new </li>
          <li>past </li>
          <li>comments </li>
          <li>ask </li>
          <li>show </li>
          <li>jobs </li>
          <li>submit </li>
          <li>Login</li>
        </div>
      </nav>
    </div>
  );
}
