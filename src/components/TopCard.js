import React, { Component, Fragment } from "react";
import "../styles/TopCard.css";

class TopCard extends Component {
  render() {
    return (
      <Fragment>
        <article className="card card__facebook">
          <header className="card__header">
            <img
              className="card__icon-media"
              src={require("../static/img/icon-facebook.svg")}
              alt="imagen facebook"
            />
            <p className="card__title">{this.props.user}</p>
          </header>
          <main class="card__main">
            <span class="card__number-total">1044</span>
            <span class="card__description">Followers</span>
          </main>
          <footer class="card__footer">
            <img
              class="card__icon-direction"
              src={require("../static/img/icon-up.svg")}
              alt="icon-up"
            />
            <p class="card__number-today card__number-today__green">99 Today</p>
          </footer>
        </article>
      </Fragment>
    );
  }
}

export default TopCard;
