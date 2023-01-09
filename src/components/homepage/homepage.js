import React from "react";
import './homepage.css';
import Header from "../header/Header";
import Content from "../content/Content";

const Homepage = (props) => {
    return (
        <div className="homepage">
            <Header />
            <Content 
                currEvents={props.currEvents} 
                upcomingEvents={props.upcomingEvents}
                clickOnEvent={props.clickOnEvent}
            />
        </div>
    )
}


export default Homepage;