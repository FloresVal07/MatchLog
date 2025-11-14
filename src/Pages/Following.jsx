import "./Following.css";

import {useEffect, useState} from "react";

import BoxedIconTeam from "../Components/BoxedIconTeam.jsx";
import BoxedIconPlayer from "../Components/BoxedIconPlayer.jsx";
const MessiSrc = "/assets/PlayerHeadshots/Messi.png"
const mlsSrc = "/assets/leagueIcons/mls.png";

function Following(){

    const [clubs, setClubs] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/clubs")
        .then(res => res.json())
        .then(data => {   
            setClubs(data)
        })
        .catch(err => console.error("Error fetching clubs:", err));
        fetch("http://localhost:4000/players")
        .then(res => res.json())
        .then(data => {   
            setPlayers(data)
        })
        .catch(err => console.error("Error fetching players:", err));
    }, []);

    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ];

    return(
        <div>
            <div className="following-header">
                <div>
                    <h1 className="following-header-title">Following</h1>
                    <div className="following-header-scroll-container">
                        {newsOptions.map((option, index) => (
                            <>
                                <button key={option.headerText}>{option.headerText}</button>
                                {index === 0 ? <h1>/</h1> : <h1></h1>}
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="following-content">
                <div className="following-content-container">
                    {clubs.map((club, index) => (
                        //teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"
                        //Match{id: 1, homeClubName: "Liverpool", awayClubName: "Manchester City", date: "2025-10-17", score: { home: 2, away: 1 } }
                        console.log(club),
                        <BoxedIconTeam key={index} clubInput={club}/>
                    ))}
                </div>
                <div className="following-content-container" style={{ backgroundColor: "lightblue" }}>
                    {players.map((player, index) => (
                        console.log(player),
                        <BoxedIconPlayer key={index} playerInput={player}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Following;