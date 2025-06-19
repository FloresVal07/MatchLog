import "./Following.css";

import BoxedIcon from "../Components/BoxedIcon.jsx";
import BarcelonaSrc from "../assets/teamIcons/Barcelona.png";

function Following(){
    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ];

    const followingTeams = [
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
                <div className="following-content-teams">
                    {followingTeams.map((team, index) => (
                        <BoxedIcon key={index} teamName={team.teamName} teamSrc={team.teamSrc} teamAlt={team.teamAlt} nextGameName={team.nextGameName} nextGameDay={team.nextGameDay} nextGameTime={team.nextGameTime} nextGameStadium={team.nextGameStadium} />
                    ))}
                </div>
                <div className="following-content-players">
                    <h1>Players</h1>
                </div>
            </div>
        </div>
    );
}

export default Following;