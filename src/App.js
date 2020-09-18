import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopGroupCards from "./components/TopGroupCards";
import LowGroupCards from "./components/LowGroupCards";

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
