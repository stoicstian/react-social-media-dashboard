import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="top-cards__header">
        <h1 class="top-cards__title">Social Media Dashboard</h1>
        <p class="top-cards__subtitle">Total Followers: 23,004</p>
        <div class="switcher">
          <p class="switcher__text">Dark Mode</p>
          <input
            type="checkbox"
            class="switcher__checkbox"
            id="switcher__checkbox"
          />
          <label class="switcher__widget" for="switcher__checkbox"></label>
        </div>
      </header>
    </div>
  );
}

export default App;
