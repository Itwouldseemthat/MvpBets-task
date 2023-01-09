import React from "react";
import EventContent from "../eventContent/EventContent";
import Header from "../header/Header";


const EventPage = (props) => {
    return (
        <div className="eventpage">
            <Header />
            <EventContent getEvent={props.getEvent}/>
        </div>
    )
}


export default EventPage;