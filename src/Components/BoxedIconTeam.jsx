import "./BoxedIconTeam.css";
import {convertToFileSyntax} from "./utils.js";

import HomeSrc from "../assets/navBarIcons/homeIconWhite.png";
import AwaySrc from "../assets/navBarIcons/planeIconWhite.png"

function Icon({clubInput}){

    const teamSrc = `/assets/teamIcons/${convertToFileSyntax(clubInput.name)}.png`;
    return(
        <div className="boxed-icon-container">
            <img src={teamSrc} alt={clubInput.name} className="boxed-icon-image" onError={(e) => {
                console.error(`Image not found for ${clubInput.name}: ${teamSrc}`);
                e.target.src = "/assets/defaultImage.png"; // or another valid path
            }}/>
            <h3 className="boxed-icon-title">{clubInput.name}</h3>
            {clubInput.nextMatch && (
                <div className="boxed-next-game-container">
                    <div className="boxed-next-game-joint">
                    <img
                        src={clubInput.nextMatch.gameStadium === "Home" ? HomeSrc : AwaySrc}
                        alt="Home Icon"
                        className="boxed-next-game-icon"
                    />
                    <h3 className="boxed-next-game-text">{clubInput.nextMatch.awayClub.name}</h3>
                    </div>
                    <h3 className="boxed-next-game-subtext">
                    {clubInput.nextMatch.date} at {clubInput.nextMatch.time}
                    </h3>
                </div>
                )}
        </div>
    );
}

export default Icon;