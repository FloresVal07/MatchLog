import "./Following.css";

import BoxedIcon from "../Components/BoxedIcon.jsx";
import BarcelonaSrc from "../assets/teamIcons/Barcelona.png";

function Following(){
    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ]
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
                    <h1>Teams</h1>
                    <h1>Teams</h1>
                    <h1>Teams</h1>
                    <h1>Teams</h1>
                    <h1>Teams</h1>
                    <h1>Teams</h1>
                    <BoxedIcon teamName="Barcelona" teamSrc={BarcelonaSrc} teamAlt="Barcelona Logo" nextGame="Next Game: 20/10/2023"/>
                </div>
                <div className="following-content-players">
                    <h1>Players</h1>
                </div>
            </div>
        </div>
    );
}

export default Following;