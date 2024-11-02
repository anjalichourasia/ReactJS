import React from "react";
import ReactDOM from "react-dom/client";
// React functional component 
//js function - it return jsx code or react element
const HeaderComponent = () => {
    return(
        <div>
            <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>

                 </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        {
        /**
         * Header
         *  - logo
         *  - list Items
         * body
         *  - Search bar
         *  - Restraunt List
         *      - Restaunat Card
         *          - Image
         *          - Name
         *          - rating
         *          - Cusins
         *  footer
         *   - links
         *   - copyright
         */
        }
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

root.render(<HeaderComponent/>);