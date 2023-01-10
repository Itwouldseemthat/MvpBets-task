import React from "react";
import ChooseBet from "../chooseBet/ChooseBet";




const FormBet = (props) => {
    return (
        <form className="detail" onSubmit={(event) => props.clickOnBet(event, props.bet)}>
            <div className="head">
                <div className="gameTime">{props.eventInfo.day}</div>
                <div className="gameTime">{props.eventInfo.time}</div>
                <button type="submit" className="btn" disabled={props.isDisabled}>Bet</button>
            </div>
            <div className="detailBet">
                <div className="teamm">
                    <img className="logoTeam" src={props.eventInfo.team1logo}></img>
                    <div className="nameTeam">{props.eventInfo.team1}</div>
                </div>
                <ChooseBet 
                    bet={props.bet}
                    chooseBet={props.chooseBet}
                    eventInfo={props.eventInfo}
                />
                <div className="teamm">
                    <div className="nameTeam notMob">{props.eventInfo.team2}</div>
                    <img className="logoTeam" src={props.eventInfo.team2logo}></img>
                    <div className="nameTeam mob">{props.eventInfo.team2}</div>
                </div>
            </div>
        </form>
    )
}

export default FormBet;