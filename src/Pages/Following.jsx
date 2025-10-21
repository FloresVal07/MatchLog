import "./Following.css";

import {useEffect, useState} from "react";

import BoxedIconTeam from "../Components/BoxedIconTeam.jsx";
import BoxedIconPlayer from "../Components/BoxedIconPlayer.jsx";
const MessiSrc = "/assets/PlayerHeadshots/Messi.png"
const mlsSrc = "/assets/leagueIcons/mls.png";

function Following(){

    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/clubs")
        .then(res => res.json())
        .then(data => {   
            setClubs(data)
        })
        .catch(err => console.error("Error fetching clubs:", err));
    }, []);

    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ];

    /*const followingTeams = [
        //teamName, teamSrc, teamAlt, nextGameName, nextGameDay, nextGameTime, nextGameStadium
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
        {teamName: "Barcelona", teamSrc: BarcelonaSrc, teamAlt: "Barcelona Logo", nextGameName: "Leeds", nextGameDay: "Sat, Jul 19", nextGameTime: "06:00", nextGameStadium: "Home"},
    ];*/
    
    const followingPlayers = [
        //playerName, playerSrc, playerAlt, playerGoals, playerAssists, teamSrc, leagueSrc 
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: "../assets/defaultImage.png", leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Goalkeeper", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: "../assets/defaultImage.png", leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: "../assets/defaultImage.png", leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: "../assets/defaultImage.png", leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Goalkeeper", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: "../assets/defaultImage.png", leagueSrc: mlsSrc},
        // Add more players as needed
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
                        <BoxedIconTeam key={index} teamName={club.name} teamSrc={club.clubLogoSrc} teamAlt={`${club.name} Logo`} nextGameName={"Leeds"} nextGameDay={"Sat, Jul 19"} nextGameTime={"06:00"} nextGameStadium={"Home"} />
                    ))}
                </div>
                <div className="following-content-container" style={{ backgroundColor: "lightblue" }}>
                    {followingPlayers.map((player, index) => (
                        <BoxedIconPlayer key={index} playerName={player.playerName} playerPos={player.playerPos} playerSrc={player.playerSrc} playerAlt={player.playerAlt} playerGoals={player.playerGoals} playerAssists={player.playerAssists} teamSrc={player.teamSrc} leagueSrc={player.leagueSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Following;