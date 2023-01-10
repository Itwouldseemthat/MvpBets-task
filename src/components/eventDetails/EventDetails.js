import React, { useState } from "react";
import FormBet from "../formBet/FormBet";
import './EventDetails.css';

const EventDetails = (props) => {

    const [bet, setBet] = useState();

    const [isDisabled, setDisabled] = useState(true);

    const [eventInfo, setEventInfo] = useState(JSON.parse(localStorage.getItem('event')))

    function chooseBet(radio) {
        setBet(radio);
        setDisabled(false);
    }

    

    return (
        <div className="eventDetails">
            <div className="eventTitle">
                <div className="tourn">
                    <img className="tournImg" src={eventInfo.tournament}></img>
                    <div className="tournName">{eventInfo.tournName}</div>
                </div>
                <img className="subj" src={eventInfo.subj}></img>
            </div>
            <FormBet
                bet={bet}
                isDisabled={isDisabled}
                eventInfo={eventInfo}
                chooseBet={chooseBet}
                clickOnBet={props.clickOnBet}
            />
            <div className="place">
                <div className="placeText">Home</div>
                <div className="placeText">Guest</div>
            </div>
        </div>
    )
}


export default EventDetails;