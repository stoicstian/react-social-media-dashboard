import React, { Component, Fragment } from "react";
import "../styles/TopGroupCards.css";
import TopCard from "./TopCard";

class TopGroupCards extends Component {
  render() {
    return (
      <Fragment>
        <TopCard user="Sebastián"></TopCard>
      </Fragment>
    );
  }
}

export default TopGroupCards;
