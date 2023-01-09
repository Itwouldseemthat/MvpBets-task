import React from "react";
import './homepage.css';
import Header from "../header/Header";
import Content from "../content/Content";
import Notification from "../notification/Notification";

const Homepage = (props) => {
    return (
        <div className="homepage">
            {props.notificDisplay && <Notification bet={props.bet} />}
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