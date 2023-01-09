import React, { useState } from "react";
import './EventDetails.css';
import euleugue from '../../image/europeLegue.png';
import football from '../../image/football.png';
import barselona from '../../image/barselona.png';
import westham from '../../image/westham.png';

const EventDetails = (props) => {

    const [bet, setBet] = useState();

    const [isDisabled, setDisabled] = useState(true);

    function chooseBet(radio) {
        setBet(radio);
        setDisabled(false);
    }

    function onSubmit(event) {
        event.preventDefault();
        console.log(bet)
    }



    return (
        <div className="eventDetails">
            <div className="eventTitle">
                <div className="tourn">
                    <img className="tournImg" src={euleugue}></img>
                    <div className="tournName">UEFA Europa League. Season 2022/2023</div>
                </div>
                <img className="subj" src={football}></img>
            </div>
            <form className="detail" onSubmit={(event) => onSubmit(event)}>
                <div className="head">
                    <div className="gameTime">08.01</div>
                    <div className="gameTime">18:00</div>
                    <button type="submit" className="btn" disabled={isDisabled}>Bet</button>
                </div>
                <div className="detailBet">
                    <div className="teamm">
                        <img className="logoTeam" src={barselona}></img>
                        <div className="nameTeam">Barcelona</div>
                    </div>
                    <div className="chooseBet">
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet('Team 1 win')}
                            />
                            <span className="radioText">Team 1 win</span>
                        </label>
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet('Drow')}
                            />
                            <span className="radioText">Drow</span>
                        </label>
                        <label className="label">
                            <input 
                                type="radio"
                                name="getBet"
                                className="btnBet"
                                value={bet}
                                onChange={() => chooseBet('Team 2 win')}
                            />
                            <span className="radioText">Team 2 win</span>
                        </label>
                    </div>
                    <div className="teamm">
                        <div className="nameTeam notMob">West Ham</div>
                        <img className="logoTeam" src={westham}></img>
                        <div className="nameTeam mob">West Ham</div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default EventDetails;