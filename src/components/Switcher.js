import React, { Fragment } from "react";
import "./Switcher.scss";

function Switcher() {
  return (
    <Fragment>
      <div className="switcher">
        <p className="switcher__text">Dark Mode</p>
        <input
          type="checkbox"
          className="switcher__checkbox"
          id="switcher__checkbox"
        />
        <label
          className="switcher__widget"
          htmlFor="switcher__checkbox"
        ></label>
      </div>
    </Fragment>
  );
}
export default Switcher;
