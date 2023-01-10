import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Homepage from "./components/homepage/homepage";
import EventPage from "./components/eventpage/EventPage";

// images
import footballLogo from './image/football.png';
import basketlogo from './image/basketlog.png';
import barselona from './image/barselona.png';
import euleague from './image/europeLegue.png';
import westham from './image/westham.png';
import memphis from './image/memphis.png';
import phoenix from './image/Phoenix.png';
import ukcup from './image/ukcup.png';
import manchester from './image/manchester.png';
import liverpool from './image/liverpool.png';
import mancity from './image/mancity.png';
import lyon from './image/lyon.png';
import anadolu from './image/anadolu.png';
import olympiakos from './image/Olympiakos.png';
import eurobasket from './image/eurobasket.png';
import chelsea from './image/Chelsea.png';
import  eintracht from './image/Eintracht.png';
import nbalogo from './image/nba-logo.png';
// images



function App() {

  let date = new Date();
  function getDateString(d) {
    let str = '';
    let day = date.getDate() + d
    if (day < 10) {
      str += `0${day}.`;
    }
    else str += `${day}.`;
    if (date.getMonth() < 10) {
      str += `0${date.getMonth() + 1}`
    }
    else str += `${date.getMonth() + 1}`;
    return str;
  }


// data obj
  const currEvents = [
    {
        subj: footballLogo,
        team1: "Barcelona",
        team1logo: barselona,
        time: "16:00",
        day: getDateString(0),
        team2: "West Ham",
        team2logo: westham,
        tournament: euleague,
        tournName: "UEFA Europa League. Season 2022/2023",
        win1: "Home x1.22",
        drow: "Drow x2.86",
        win2: "Guest x2.25",
    },
    {
        subj: footballLogo,
        team1: "Manchester city",
        team1logo: mancity,
        time: "20:00",
        day: getDateString(0),
        team2: "Liverpool",
        team2logo: liverpool,
        tournament: ukcup,
        tournName: "The Emirates FA Cup. Season 2022/2023",
        win1: "Home x2.22",
        drow: "Drow x2.4",
        win2: "Guest x1.75",
    }
  ]

  const upcomingEvents = [
    {
      subj: footballLogo,
      team1: "Manchester",
      team1logo: manchester,
      time: "10:00",
      day: getDateString(1),
      team2: "Chelsea",
      team2logo: chelsea,
      tournament: ukcup, 
      tournName: "The Emirates FA Cup. Season 2022/2023",
      win1: "Home x1.55",
      drow: "Drow x3.12",
      win2: "Guest x2.76",
    },
    {
      subj: footballLogo,
      team1: "Eintracht F",
      team1logo: eintracht,
      time: "14:00",
      day: getDateString(2),
      team2: "Lyon",
      team2logo: lyon,
      tournament: euleague, 
      tournName: "UEFA Europa League. Season 2022/2023",
      win1: "Home x1.22",
      drow: "Drow x2.86",
      win2: "Guest x2.25",
    },
    {
      subj: basketlogo,
      team1: "Memphis Grizzlies",
      team1logo: memphis,
      time: "18:00",
      day: getDateString(2),
      team2: "Phoenix Suns",
      team2logo: phoenix,
      tournament: nbalogo,
      tournName: "NBA Play-In Tournament. Season 2022/2023",
      win1: "Home x1.87",
      drow: "Drow x2.23",
      win2: "Guest x1.91", 
    },
    {
      subj: basketlogo,
      team1: "Anadolu Efes",
      team1logo: anadolu,
      time: "23:00",
      day: getDateString(3),
      team2: "Olympiacos",
      team2logo: olympiakos,
      tournament: eurobasket,
      tournName: "Euroleague Basketball. Season 2022/2023",
      win1: "Home x3.11",
      drow: "Drow x2.86",
      win2: "Guest x1.33", 
    },
  ]
// data obj

  const navigate = useNavigate();

  const goToHomepage = () => navigate('/');
  const goToEventpage = () => navigate('/event');


  function clickOnEvent(eventInfo) {
    goToEventpage();
    localStorage.setItem('event', JSON.stringify(eventInfo))
  }

  const [notificDisplay, setNotificDisplay] = useState(false)

  const [bet, setBet] = useState()

  function clickOnBet(event, bet) {
    event.preventDefault();
    setBet(bet);
    setNotificDisplay(true);
    goToHomepage();
    setTimeout(() => setNotificDisplay(false), 5000);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              notificDisplay={notificDisplay} 
              currEvents={currEvents}
              upcomingEvents={upcomingEvents}
              clickOnEvent={clickOnEvent}
              bet={bet}
            />
          }
          exact 
        />
        <Route 
          path="/event"
          element={
            <EventPage clickOnBet={clickOnBet} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

