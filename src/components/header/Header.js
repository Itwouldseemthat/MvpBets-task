import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const Header = (props) => {

    const navigate = useNavigate()

    const link = () => navigate('/')

    return (
        <div className="header">
            <div className="logo" onClick={link}>
                <a className="logoText">MVP</a>
                <a className="logoText under">bets</a>
            </div>
        </div>
    )
}

export default Header;