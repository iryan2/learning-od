import React from "react";
// import config from './config.json'
import logo from "./logo.svg";
import "./App.css";

async function getConfig() {
  const config = await fetch("config.json");
  const data = await config.json();
  console.log(`data`, data);
  return data;
}

function App() {
  const config = getConfig();
  console.log(`config`, config);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* @ts-ignore */}
        <p>{config?.Greeting}</p>
      </header>
    </div>
  );
}

export default App;
