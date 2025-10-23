import "./BoxedIconTeam.css";

import HomeSrc from "../assets/navBarIcons/homeIconWhite.png";
import AwaySrc from "../assets/navBarIcons/planeIconWhite.png"

function Icon({teamName, teamAlt, nextMatch}){
    const convertToFileSyntax = (inputName) => {
        return inputName.toLowerCase().replace(/\s+/g, "_");
    };
    const teamSrc = `/assets/teamIcons/${convertToFileSyntax(teamName)}.png`;
    return(
        <div className="boxed-icon-container">
            <img src={teamSrc} alt={teamAlt} className="boxed-icon-image" onError={(e) => {
                console.error(`Image not found for ${teamName}: ${teamSrc}`);
                e.target.src = "/assets/defaultImage.png"; // or another valid path
            }}/>
            <h3 className="boxed-icon-title">{teamName}</h3>
            <div className="boxed-next-game-container">
                <div className="boxed-next-game-joint">
                    <img src={nextMatch.gameStadium === "Home" ? HomeSrc : AwaySrc} alt="Home Icon" className="boxed-next-game-icon" />
                    <h3 className="boxed-next-game-text">{nextMatch.awayClubName}</h3>
                </div>
                <h3 className="boxed-next-game-subtext">{nextMatch.date} at {nextMatch.time}</h3>
            </div>
        </div>
    );
}

export default Icon;