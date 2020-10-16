import React, { useState, useEffect, Fragment } from "react";
import "./TopCard.scss";

function TopCard() {
  return (
    <Fragment>
      <article className="card card__facebook">
        <header className="card__header">
          <img className="card__icon-media" src="" alt="imagen facebook" />
          <p className="card__title">@sebastian</p>
        </header>
        <main className="card__main">
          <span className="card__number-total">1987</span>
          <span className="card__description">followers</span>
        </main>
        <footer className="card__footer">
          <img className="card__icon-direction" src="" alt="icon-up" />
          <p className="card__number-today card__number-today__green">
            12 today
          </p>
        </footer>
      </article>
    </Fragment>
  );
}

export default TopCard;
