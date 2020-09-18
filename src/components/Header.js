import React, { Component, Fragment } from "react";
import "../styles/Header.css";
import Switcher from "./Switcher";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Switcher></Switcher>
      </Fragment>
    );
  }
}

export default Header;
