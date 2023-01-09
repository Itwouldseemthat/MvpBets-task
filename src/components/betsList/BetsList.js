import React from "react";
import BetBlock from "../betblock/BetBlock";


const BetsList = (props) => {
    return (
        <div className="betsList">
            <div className="Events">
                <div className="Title">The current events</div>
                <BetBlock events={props.currEvents} clickOnEvent={props.clickOnEvent}/>
            </div>
            <div className="Events">
                <div className="Title">The upcoming events</div>
                <BetBlock events={props.upcomingEvents} clickOnEvent={props.clickOnEvent}/>
            </div>
        </div>
    )
}


export default BetsList;