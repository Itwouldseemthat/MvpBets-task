import React from "react";
import banner from '../../image/foot.png';


const Banner = (props) => {
    return (
        <div className="banner">
            <img className="bannerImage" src={banner}></img>
            <div className="bannerTitle">
                <a className="text">Bet on the match with MVP</a>
                <a className="text">and we will give you <span className="notMobile">the Most Valuable Odds</span></a>
                <a className="text mobile">the Most Valuable Odds</a>
            </div>
        </div>
    )
}


export default Banner;