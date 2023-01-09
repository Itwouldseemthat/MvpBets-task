import React from "react";
import './BetBlock.css';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const BetBlock = (props) => {




    return (
        <div className="bets">
            {
                props.events.map((item, index) => (
                    <div className="bet" key={index} onClick={() => props.clickOnEvent(item)}>
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