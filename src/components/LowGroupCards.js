import React, { Component, Fragment } from "react";
import LowCard from "./LowCard";
import "./LowGroupCards.scss";

function LowGroupCards() {
  return (
    <main className="low-cards">
      <LowCard></LowCard>
      <LowCard></LowCard>
      <LowCard></LowCard>
      <LowCard></LowCard>
    </main>
  );
}

// class LowGroupCards extends Component {
//   render() {
//     return (
//       <Fragment>
//         <LowCard></LowCard>
//       </Fragment>
//     );
//   }
// }

export default LowGroupCards;
