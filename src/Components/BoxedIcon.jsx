import "./BoxedIcon.css";

import HomeSrc from "../assets/navBarIcons/homeIcon.png";
import AwaySrc from "../assets/navBarIcons/planeIcon.png"

function Icon({teamName, teamSrc, teamAlt, nextGame}){
    return(
        <div className="boxed-icon-container">
            <img src={teamSrc} alt={teamAlt} className="boxed-icon-image" />
            <h3 className="boxed-icon-title">{teamName}</h3>
            <div className="boxed-next-game-container">
                <div className="boxed-next-game-joint">
                    
                </div>
            </div>
        </div>
    );
}

export default Icon;