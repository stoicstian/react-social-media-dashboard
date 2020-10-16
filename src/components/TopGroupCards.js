import React, { Fragment } from "react";
import TopCard from "./TopCard";
import "./TopGroupCards.scss";

function TopGroupCards() {
  return (
    <Fragment>
      <main className="top-cards">
        <TopCard></TopCard>
        <TopCard></TopCard>
        <TopCard></TopCard>
        <TopCard></TopCard>
      </main>
    </Fragment>
  );
}

export default TopGroupCards;
