import React, { Component, Fragment } from "react";
// import "../styles/_TopCard.scss";
class TopCard extends Component {
  render() {
    return (
      <Fragment>
        <article className="card card__facebook">
          <header className="card__header">
            <img
              className="card__icon-media"
              src="../static/img/icon-facebook.svg"
              alt="imagen facebook"
            />
            <p className="card__title">{this.props.user}</p>
          </header>
        </article>
      </Fragment>
    );
  }
}

export default TopCard;
