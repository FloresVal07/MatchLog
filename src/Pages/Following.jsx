import "./Following.css";

import BoxedIconTeam from "../Components/BoxedIconTeam.jsx";
import BoxedIconPlayer from "../Components/BoxedIconPlayer.jsx";
import BarcelonaSrc from "../assets/teamIcons/Barcelona.png";
import MessiSrc from "../assets/PlayerHeadshots/Messi.png"
import mlsSrc from "../assets/leagueIcons/mls.png";

function Following(){

    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ];

    const followingTeams = [
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
    ];

    const followingPlayers = [
        //playerName, playerSrc, playerAlt, playerGoals, playerAssists, teamSrc, leagueSrc 
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: BarcelonaSrc, leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Goalkeeper", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: BarcelonaSrc, leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: BarcelonaSrc, leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Winger", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: BarcelonaSrc, leagueSrc: mlsSrc},
        {playerName: "Lionel Messi", playerPos: "Goalkeeper", playerSrc: MessiSrc, playerAlt: "Lionel Messi", playerGoals: 30, playerAssists: 10, teamSrc: BarcelonaSrc, leagueSrc: mlsSrc},
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
                    {followingTeams.map((team, index) => (
                        <BoxedIconTeam key={index} teamName={team.teamName} teamSrc={team.teamSrc} teamAlt={team.teamAlt} nextGameName={team.nextGameName} nextGameDay={team.nextGameDay} nextGameTime={team.nextGameTime} nextGameStadium={team.nextGameStadium} />
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