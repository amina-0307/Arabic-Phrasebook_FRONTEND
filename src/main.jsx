import './style.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { setupCounter } from './counter.js';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
