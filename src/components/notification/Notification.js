import React from "react";



const Notification = (props) => {

    const info = JSON.parse(localStorage.getItem('event'))
    
    return (
        <div className="notification">
            <div className="textNotific">{info.tournName}</div>
            <div className="textNotific">{`${info.team1} vs ${info.team2}`}</div>
            <div className="textNotific">{`Your Bet: ${props.bet}.  Good Luck!`}</div>
        </div> 
    )
}


export default Notification;