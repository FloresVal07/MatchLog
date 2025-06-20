import "./BoxedIconPlayer.css";

function Icon({playerName, playerSrc, playerAlt, playerGoals, playerAssists, teamSrc, leagueSrc }) {
    const [firstName, lastName] = playerName.split(" ");
    return(
        <div className="boxed-icon-container">
            <div className="boxed-icon-image-container">
                <img src={playerSrc} alt={playerAlt} className="boxed-icon-player-image" />
                <img src={teamSrc} alt="League Icon" className="boxed-icon-team-image" />
            </div>
            <div className="boxed-icon-name-container">
                <h3 className="boxed-icon-firstName">{firstName}</h3>
                <h3 className="boxed-icon-lastName">{lastName}</h3>
            </div>
            <div className="boxed-icon-stats-container">
                <div className="boxed-icon-player-league-image-container">
                    <img src={leagueSrc} alt="League Icon" className="boxed-icon-player-league-image" />
                </div>
                <h3 className="boxed-icon-goals">{playerGoals}</h3>
                <h3 className="boxed-icon-assists">{playerAssists}</h3>
            </div>
        </div>
    );
}

export default Icon;