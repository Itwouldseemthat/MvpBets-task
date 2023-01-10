import React from "react";
import BetBlock from "../betblock/BetBlock";


const BetsList = (props) => {
    return (
        <div className="betsList">
            <div className="Events">
                <div className="Title">Current events</div>
                <BetBlock events={props.currEvents} clickOnEvent={props.clickOnEvent}/>
            </div>
            <div className="Events">
                <div className="Title">Upcoming events</div>
                <BetBlock events={props.upcomingEvents} clickOnEvent={props.clickOnEvent}/>
            </div>
        </div>
    )
}


export default BetsList;