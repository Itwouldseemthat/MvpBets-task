import React from "react";
import './homepage.css';
import Header from "../header/Header";
import Content from "../content/Content";

const Homepage = (props) => {
    return (
        <div className="homepage">
            <Header />
            <Content />
        </div>
    )
}


export default Homepage;