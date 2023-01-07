import React from "react";
import BetBlock from "../betblock/BetBlock";


const BetsList = (props) => {
    return (
        <div className="betsList">
            <div className="Events">
                <div className="Title">The current events</div>
                <BetBlock />
            </div>
            <div className="Events">
                <div className="Title">The upcoming events</div>
                <BetBlock />
            </div>
        </div>
    )
}


export default BetsList;