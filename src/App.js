import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App"> 
      <div className="container">
        <Weather defaultCity="Amsterdam"/>
        <footer>
          This project was coded by Marilyn Greve, is{" "} 
          <a href="https://github.com/Majel45/react-weather-app" target="_blank" rel="noreferrer">
            open-sourced on GitHub
          </a> and{" "} 
          <a href="https://musing-mirzakhani-d742ea.netlify.app/" target="_blnak" rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
