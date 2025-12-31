import "./BoxedIconPlayer.css";
import {convertToFileSyntax} from "./utils.js";

import Gloves from "../assets/navBarIcons/saves.png"
import CleanSheets from "../assets/navBarIcons/CleanSheet.png";
import AssistIcon from "../assets/navBarIcons/assists.png";
import GoalIcon from "../assets/navBarIcons/goals.png";
import MatchesPlayedIcon from "../assets/navBarIcons/MatchesPlayedIcon.png";

//id: 1, name: "Mohamed Salah", age: 31, position: "Forward", club: Club[0] 
function Icon({playerInput, onClick}) {
    
    const playerSrc = `/assets/playerIcons/${convertToFileSyntax(playerInput.name)}.png`;
    const teamSrc = `/assets/teamIcons/${convertToFileSyntax(playerInput.club.name)}.png`;
    const leagueSrc = (playerInput.club.league != null ? `/assets/leagueIcons/${convertToFileSyntax(playerInput.club.league.name)}.png` : `/assets/defaultImage.png`);

    const [firstName, lastName] = playerInput.name.split(" ");
    
    return(
        <div className="boxed-icon-container" onClick={() => onClick(playerInput)}>
            <div className="boxed-icon-image-container">
                <img src={playerSrc} alt={`Headshot Image of ${playerInput.name}`} className="boxed-icon-player-image" />
                <img src={teamSrc} alt="League Icon" className="boxed-icon-team-image" />
            </div>
            <div className="boxed-icon-name-container">
                <h3 className="boxed-icon-firstName">{firstName}</h3>
                <h3 className="boxed-icon-lastName">{lastName}</h3>
            </div>
            <div className="boxed-icon-player-league-image-container">
                    <img src={leagueSrc} alt="League Icon" className="boxed-icon-player-league-image" />
            </div>
            <div className="boxed-icon-stats-container">
                <div className="boxed-icon-stats-container-container">
                    <img src={MatchesPlayedIcon} alt="Matches Played Icon" className="boxed-icon-stats-icon" />
                    <h3 className="boxed-icon-stats-text">34</h3>
                </div>
                {playerInput.position === "Forward" ? (
                    <div className="generic-row">
                        <div className="boxed-icon-stats-container-container">
                            <img src={GoalIcon} alt="Goals Icon" className="boxed-icon-stats-icon" />
                            <h3 className="boxed-icon-stats-text">{playerInput.playerGoals}</h3>
                        </div>
                        <div className="boxed-icon-stats-container-container">
                            <img src={AssistIcon} alt="Assists Icon" className="boxed-icon-stats-icon" />
                            <h3 className="boxed-icon-stats-text">{playerInput.playerAssists}</h3>
                        </div>
                    </div>
                ) : (
                    <div className="generic-row">
                        <div className="boxed-icon-stats-container-container">
                            <img src={CleanSheets} alt="Clean Sheets Icon" className="boxed-icon-stats-icon" />
                            <h3 className="boxed-icon-stats-text">15</h3>
                        </div>
                        <div className="boxed-icon-stats-container-container">
                            <img src={Gloves} alt="Saves Icon" className="boxed-icon-stats-icon" />
                            <h3 className="boxed-icon-stats-text">120</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Icon;