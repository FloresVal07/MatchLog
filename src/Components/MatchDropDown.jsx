import { useState } from "react";
import { convertToFileSyntax } from "./utils.js";
import "./MatchDropDown.css";
import DropDownArrow from "../assets/navBarIcons/DropDownArrowIcon.png";

const MatchDropdown = ({leagueInstance, matches}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const headerImageSrc = `/assets/leagueIcons/${convertToFileSyntax(leagueInstance.name)}.png`;

  const handleSelect = (match) => {
    setSelectedMatch(match);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
        <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
            <div>
                <img
                    src={headerImageSrc} // just one image pointing down
                    alt={`${leagueInstance.name} Logo`}
                    className="dropdown-following-icon"
                />
                <span>
                    {selectedMatch
                    ? `${selectedMatch.homeClub.name} vs ${selectedMatch.awayClub.name} (${selectedMatch.date}) (${selectedMatch.time})`
                    : leagueInstance.name}
                </span>
            </div>
            <div className="drop-down-arrow-container">
                {!isOpen && (
                    <div className="drop-down-matches-length-container">
                        <h3>{matches.length}</h3>
                    </div>
                )}
                <img
                    src={DropDownArrow} // just one image pointing down
                    alt="Toggle dropdown"
                    className={`dropdown-arrow-icon ${isOpen ? "rotated" : ""}`}
                />
            </div>
        </div>
      <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
        {matches.map((match) => (
          <div className="dropdown-item" key={match._id} onClick={() => handleSelect(match)}>
            <div className="team">
              <img src={`/assets/teamIcons/${convertToFileSyntax(match.homeClub.name)}.png`} alt={`${match.homeClub.name} logo`} />
              <div className="team-name"><h3>{match.homeClub.name}</h3></div>
            </div>
            <div className="score">
                <h2>{match.score.home} : {match.score.away}</h2>
            </div>
            <div className="team right">
              <img src={`/assets/teamIcons/${convertToFileSyntax(match.awayClub.name)}.png`} alt={`${match.awayClub.name} logo`} />
              <div className="team-name"><h3>{match.awayClub.name}</h3></div>
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default MatchDropdown;
