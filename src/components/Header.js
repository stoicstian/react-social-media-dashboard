import React, { Fragment } from "react";
import "./Header.scss";
import "./Switcher";
import Switcher from "./Switcher";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <h1 className="header__title">Social Media Dashboard</h1>
        <p className="header__subtitle">Total Followers: 23,004</p>
        <Switcher></Switcher>
      </header>
    </Fragment>
  );
}

export default Header;
