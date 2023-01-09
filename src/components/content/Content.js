import React from "react";
import Banner from "../banner/Banner";
import BetsList from "../betsList/BetsList";

const Content = (props) => {
    return (
        <div className="container">
            <Banner />
            <BetsList 
                currEvents={props.currEvents} 
                upcomingEvents={props.upcomingEvents}
                clickOnEvent={props.clickOnEvent}
            />
        </div>
    )
}


export default Content;