import React from "react";



const ChooseBet = (props) => {
    return (
        <div className="chooseBet">
            <label className="label">
                <input 
                    type="radio"
                    name="getBet"
                    className="btnBet"
                    value={props.bet}
                    onChange={() => props.chooseBet(props.eventInfo.win1)}
                />
                <span className="radioText">{props.eventInfo.win1}</span>
            </label>
            <label className="label">
                <input 
                    type="radio"
                    name="getBet"
                    className="btnBet"
                    value={props.bet}
                    onChange={() => props.chooseBet(props.eventInfo.drow)}
                />
                <span className="radioText">{props.eventInfo.drow}</span>
            </label>
            <label className="label">
                <input 
                    type="radio"
                    name="getBet"
                    className="btnBet"
                    value={props.bet}
                    onChange={() => props.chooseBet(props.eventInfo.win2)}
                />
                <span className="radioText">{props.eventInfo.win2}</span>
            </label>
        </div>
    )
}


export default ChooseBet;