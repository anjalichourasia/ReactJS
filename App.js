import React from "react";
import ReactDOM from "react-dom/client";

// JSX - javascript syntax to create react element
const jsxElement = <h1>namaste react using jsx</h1>

// React.createElement => Object => HTML Element (render inside a dom it become html)
const heading = React.createElement("h1", {}, "namaste");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxElement);