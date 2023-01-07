import React from "react";
import './BetBlock.css';
import footballLogo from '../../image/football.png';
import basketlogo from '../../image/basketlog.png';
import barselona from '../../image/barselona.png';
import euleague from '../../image/europeLegue.png';

const BetBlock = (props) => {
    return (
        <div className="bets">
            <div className="bet">
                <img className="subject" src={footballLogo}></img>
                <div className="gameInfo">
                    <div className="team end">
                        <div className="teamName">Barcelona</div>
                        <img className="teamLogo" src={barselona}></img>
                    </div>
                    <div className="date">
                        <div className="time">16.00</div>
                        <div className="day">06.01</div>
                    </div>
                    <div className="team">
                        <img className="teamLogo" src={barselona}></img>
                        <div className="teamName">Barcelona</div>
                    </div>
                </div>
                <img className="tournament" src={euleague}></img>
            </div>
            <div className="bet">
                <img className="subject" src={footballLogo}></img>
                <div className="gameInfo">
                    <div className="team end">
                        <div className="teamName">Barcelona</div>
                        <img className="teamLogo" src={barselona}></img>
                    </div>
                    <div className="date">
                        <div className="time">16.00</div>
                        <div className="day">06.01</div>
                    </div>
                    <div className="team">
                        <img className="teamLogo" src={barselona}></img>
                        <div className="teamName">Barcelona</div>
                    </div>
                </div>
                <img className="tournament" src={euleague}></img>
            </div>
        </div>
    )
}


export default BetBlock;