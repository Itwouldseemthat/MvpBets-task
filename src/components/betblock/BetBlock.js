import React from "react";
import './BetBlock.css';
import footballLogo from '../../image/football.png';
import basketlogo from '../../image/basketlog.png';
import barselona from '../../image/barselona.png';
import euleague from '../../image/europeLegue.png';
import westham from '../../image/westham.png';
import memphis from '../../image/memphis.png';
import phoenix from '../../image/Phoenix.png';
import nba from '../../image/nba.png';
import ukcup from '../../image/ukcup.png';

const BetBlock = (props) => {

    const currEvents = [
        {
            subj: footballLogo,
            team1: "Barcelona",
            team1logo: barselona,
            time: "16:00",
            day: "06.01",
            team2: "West Ham",
            team2logo: westham,
            tournament: euleague,
        },
        {
            subj: basketlogo,
            team1: "Memphis Grizzlies",
            team1logo: memphis,
            time: "18:00",
            day: "07.01",
            team2: "Phoenix suns",
            team2logo: phoenix,
            tournament: ukcup,
        }
    ]




    return (
        <div className="bets">
            {
                currEvents.map((item, index) => (
                    <div className="bet" key={index}>
                        <img className="subject" src={item.subj}></img>
                        <div className="gameInfo">
                            <div className="team end">
                                <div className="teamName">
                                    <a className="textName">{item.team1}</a>
                                </div>
                                <img className="teamLogo" src={item.team1logo}></img>
                            </div>
                            <div className="date">
                                <div className="time">{item.time}</div>
                                <div className="day">{item.day}</div>
                            </div>
                            <div className="team">
                                <img className="teamLogo" src={item.team2logo}></img>
                                <div className="teamName">{item.team2}</div>
                            </div>
                        </div>
                        <img className="tournament" src={item.tournament}></img>
                    </div>
                ))
            }
        </div>
    )
}


export default BetBlock;