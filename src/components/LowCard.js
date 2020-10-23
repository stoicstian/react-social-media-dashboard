import React, { Fragment } from "react";
import "./LowCard.scss";

function LowCard({ pageViews, growth, socialMedia, icon }) {
  return (
    <Fragment>
      <article className="card-low">
        <p className="card-low__text-views">Pages Views</p>
        <p className="card-low__icon-media">
          <img src={socialMedia} alt="error" />
        </p>
        <p className="card-low__number-views">{pageViews}</p>
        <p className="card-low__percentage-views card-low__percentage-views_green">
          <span>
            <img src={icon} alt="error" />
            {growth}
          </span>
        </p>
      </article>
    </Fragment>
  );
}

export default LowCard;
