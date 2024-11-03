import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// React functional component 
//js function - it return jsx code or react element







const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            {
        }
        </div>
    )
}
// JSX - javascript syntax to create react element
//React element
const jsxElement = (
    <h1>
        namaste react using jsx
    </h1>
);

// React.createElement => Object => HTML Element (render inside a dom it become html)
const heading = React.createElement("h1", {}, "namaste");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);