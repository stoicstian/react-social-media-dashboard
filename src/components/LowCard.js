import React, { Fragment } from "react";
import "./LowCard.scss";

function LowCard() {
  return (
    <Fragment>
      <article className="card-low">
        <p className="card-low__text-views">Pages Views</p>
        <p className="card-low__icon-media">
          <img src="" alt="error" />
        </p>
        <p className="card-low__number-views">87</p>
        <p className="card-low__percentage-views card-low__percentage-views_green">
          <span>
            <img src="" alt="error" />
            3%
          </span>
        </p>
      </article>
    </Fragment>
  );
}

export default LowCard;
