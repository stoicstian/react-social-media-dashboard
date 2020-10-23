import React, { Fragment } from "react";
import LowCard from "./LowCard";
import "./LowGroupCards.scss";
import iconDown from "./img/icon-down.svg";
import iconUp from "./img/icon-up.svg";
import facebook from "./img/icon-facebook.svg";
import instagram from "./img/icon-instagram.svg";
import twitter from "./img/icon-twitter.svg";
import youtube from "./img/icon-youtube.svg";

const cardSmallList = [
  {
    id: 1,
    socialMedia: facebook,
    socialName: "facebook",
    icon: iconUp,
    pageViews: 11,
    growth: 3,
  },
  {
    id: 2,
    socialMedia: instagram,
    socialName: "instagram",
    icon: iconUp,
    pageViews: 20,
    growth: 5,
  },
  {
    id: 3,
    socialMedia: twitter,
    socialName: "twitter",
    icon: iconDown,
    pageViews: 23,
    growth: 10,
  },
  {
    id: 4,
    socialMedia: youtube,
    socialName: "youtube",
    icon: iconUp,
    pageViews: 123,
    growth: 19,
  },
];

function LowGroupCards() {
  console.log(typeof iconUp);
  console.log(cardSmallList[0].icon);
  return (
    <Fragment>
      <main className="low-cards">
        {cardSmallList.map((cardData) => (
          <LowCard key={cardData.id} {...cardData}></LowCard>
        ))}
      </main>
    </Fragment>
  );
}

export default LowGroupCards;
