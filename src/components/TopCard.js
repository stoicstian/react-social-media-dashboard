import React, { Fragment } from "react";
import "./TopCard.scss";
// import style from "./TopCard.module.scss";

function TopCard({
  userName,
  followers,
  todayFollowers,
  socialMedia,
  icon,
  socialName,
}) {
  return (
    <Fragment>
      {/* <article className={`${style.card-top}`}> */}
      {/* <article className="card-top card-top__facebook"> */}
      <article className={`card-top card-top__${socialName}`}>
        {/* <article className="card-top card-top__facebook"> */}
        <header className="card-top__header">
          <img
            className="card-top__icon-media"
            src={socialMedia}
            alt="imagen facebook"
          />
          <p className="card-top__title">{userName}</p>
        </header>
        <main className="card-top__main">
          <span className="card-top__number-total">{followers}</span>
          <span className="card-top__description">followers</span>
        </main>
        <footer className="card-top__footer">
          <img className="card-top__icon-direction" src={icon} alt="icon-up" />
          <p
            className={
              todayFollowers >= 0
                ? "card-top__number-today card-top__number-today__green"
                : "card-top__number-today card-top__number-today__red"
            }
          >
            {todayFollowers} today
          </p>
        </footer>
      </article>
    </Fragment>
  );
}

export default TopCard;
