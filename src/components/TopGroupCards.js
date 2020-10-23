import React, { Fragment } from "react";
import TopCard from "./TopCard";
import "./TopGroupCards.scss";
import iconDown from "./img/icon-down.svg";
import iconUp from "./img/icon-up.svg";
import facebook from "./img/icon-facebook.svg";
import instagram from "./img/icon-instagram.svg";
import twitter from "./img/icon-twitter.svg";
import youtube from "./img/icon-youtube.svg";

const cardListData = [
  {
    id: 1,
    userName: "@sebastian",
    followers: "1596",
    todayFollowers: 12,
    socialMedia: facebook,
    socialName: "facebook",
    icon: iconUp,
  },

  {
    id: 2,
    userName: "@sebastian",
    followers: "28k",
    todayFollowers: 20,
    socialMedia: twitter,
    socialName: "twitter",
    icon: iconUp,
  },

  {
    id: 3,
    userName: "@sebastian",
    followers: "6k",
    todayFollowers: 30,
    socialMedia: instagram,
    socialName: "instagram",
    icon: iconUp,
  },

  {
    id: 4,
    userName: "@sebastian",
    followers: "12k",
    todayFollowers: 50,
    socialMedia: youtube,
    socialName: "youtube",
    icon: iconDown,
  },
];

function TopGroupCards() {
  return (
    <Fragment>
      <main className="top-cards">
        {cardListData.map((cardData) => (
          <TopCard key={cardData.id} {...cardData}></TopCard>
        ))}
      </main>
      {console.log(facebook)}
    </Fragment>
  );
}

export default TopGroupCards;
