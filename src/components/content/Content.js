import React from "react";
import Banner from "../banner/Banner";
import BetsList from "../betsList/BetsList";

const Content = (props) => {
    return (
        <div className="container">
            <Banner />
            <BetsList />
        </div>
    )
}


export default Content;