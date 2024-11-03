import React from "react";
import ReactDOM from "react-dom/client";
// React functional component 
//js function - it return jsx code or react element
const HeaderComponent = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DfnC1vvuLfVs7nnTZY-C3XgsQozpbzuMYw&s" />
            </div>
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


const RestrauntCard = (props) => { 
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8dyDK5OTm9Xy-WxnXzjGCnxU-GVTtDPnjQ&s" 
            />
            <h3> {props.resName} </h3>
            <h4> {props.cuisine} </h4>
            <h5> {}</h5>
        </div>
    )
}

const BodyComponent = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restraunt-container">
                <RestrauntCard 
                    resName="Meghna Food" 
                    cuisine="Biryani, north indian"
                    rating="Rating 4.4"
                />
                <RestrauntCard 
                    resName="Punjabi Swag" 
                    cuisine="Punjabi, north east"
                />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
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