import React from "react";
import Banner from "../banner/Banner";
import EventDetails from "../eventDetails/EventDetails";


const EventContent = (props) => {
    return (
        <div className="container">
            <Banner />
            <EventDetails getEvent={props.getEvent} />
        </div>
    )
}


export default EventContent;