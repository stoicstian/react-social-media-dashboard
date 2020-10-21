import React from "react";
import { TopGroupCards, LowGroupCards, Header } from "./components/exports";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopGroupCards></TopGroupCards>
      <LowGroupCards></LowGroupCards>
    </div>
  );
}

export default App;
