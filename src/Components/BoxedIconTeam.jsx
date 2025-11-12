import "./BoxedIconTeam.css";

import HomeSrc from "../assets/navBarIcons/homeIconWhite.png";
import AwaySrc from "../assets/navBarIcons/planeIconWhite.png"

function Icon({clubInput}){
    console.log(clubInput);
    const convertToFileSyntax = (inputName) => {
        return inputName.toLowerCase().replace(/\s+/g, "_");
    };
    const teamSrc = `/assets/teamIcons/${convertToFileSyntax(clubInput.name)}.png`;
    return(
        <div className="boxed-icon-container">
            <img src={teamSrc} alt={clubInput.name} className="boxed-icon-image" onError={(e) => {
                console.error(`Image not found for ${clubInput.name}: ${teamSrc}`);
                e.target.src = "/assets/defaultImage.png"; // or another valid path
            }}/>
            <h3 className="boxed-icon-title">{clubInput.name}</h3>
            {clubInput.nextGame && (
                <div className="boxed-next-game-container">
                    <div className="boxed-next-game-joint">
                    <img
                        src={clubInput.nextGame.gameStadium === "Home" ? HomeSrc : AwaySrc}
                        alt="Home Icon"
                        className="boxed-next-game-icon"
                    />
                    <h3 className="boxed-next-game-text">{clubInput.nextGame.awayClub.name}</h3>
                    </div>
                    <h3 className="boxed-next-game-subtext">
                    {clubInput.nextGame.date} at {clubInput.nextGame.time}
                    </h3>
                </div>
                )}
        </div>
    );
}

export default Icon;