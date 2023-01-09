import React, { useEffect, useState } from "react";
import './EventDetails.css';
import euleugue from '../../image/europeLegue.png';
import football from '../../image/football.png';
import barselona from '../../image/barselona.png';
import westham from '../../image/westham.png';

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
            <form className="detail" onSubmit={(event) => props.clickOnBet(event, bet)}>
                <div className="head">
                    <div className="gameTime">{eventInfo.day}</div>
                    <div className="gameTime">{eventInfo.time}</div>
                    <button type="submit" className="btn" disabled={isDisabled}>Bet</button>
                </div>
                <div className="detailBet">
                    <div className="teamm">
                        <img className="logoTeam" src={eventInfo.team1logo}></img>
                        <div className="nameTeam">{eventInfo.team1}</div>
                    </div>
                    <div className="chooseBet">
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet(eventInfo.win1)}
                            />
                            <span className="radioText">{eventInfo.win1}</span>
                        </label>
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet(eventInfo.drow)}
                            />
                            <span className="radioText">{eventInfo.drow}</span>
                        </label>
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet(eventInfo.win2)}
                            />
                            <span className="radioText">{eventInfo.win2}</span>
                        </label>
                    </div>
                    <div className="teamm">
                        <div className="nameTeam notMob">{eventInfo.team2}</div>
                        <img className="logoTeam" src={eventInfo.team2logo}></img>
                        <div className="nameTeam mob">{eventInfo.team2}</div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default EventDetails;