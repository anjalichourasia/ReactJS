import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Namaste EveryOne!");
    const heading1 = React.createElement("h1", 
    {
        id: "title"
    }, "Namaste EveryOne heading!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const footer = ReactDOM.createRoot(document.getElementById("footer"));
    root.render(heading);
    footer.render(heading1);