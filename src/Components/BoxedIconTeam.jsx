import "./BoxedIconTeam.css";

import HomeSrc from "/assets/navBarIcons/homeIconWhite.png";
import AwaySrc from "/assets/navBarIcons/planeIconWhite.png"

function Icon({teamName, teamAlt, nextGameName, nextGameDay, nextGameTime, nextGameStadium}){
    const teamSrc = `/assets/teamIcons/${teamName.toLowerCase().replace(/\s+/g, "_")}.png`;
    return(
        <div className="boxed-icon-container">
            <img src={teamSrc} alt={teamAlt} className="boxed-icon-image" onError={(e) => {
                console.error(`Image not found for ${teamName}: ${teamSrc}`);
                e.target.src = "/assets/defaultImage.png"; // or another valid path
            }}/>
            <h3 className="boxed-icon-title">{teamName}</h3>
            <div className="boxed-next-game-container">
                <div className="boxed-next-game-joint">
                    <img src={nextGameStadium === "Home" ? HomeSrc : AwaySrc} alt="Home Icon" className="boxed-next-game-icon" />
                    <h3 className="boxed-next-game-text">{nextGameName}</h3>
                </div>
                <h3 className="boxed-next-game-subtext">{nextGameDay} at {nextGameTime}</h3>
            </div>
        </div>
    );
}

export default Icon;