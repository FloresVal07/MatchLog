import { useState } from "react";
import "./MatchDropDown.css";
import DropDownArrow from "../assets/navBarIcons/DropDownArrowIcon.png";

const MatchDropdown = ({matches, headerTitle, headerImageSrc, headerImageAlt}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

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
                    alt={headerImageAlt}
                    className="dropdown-following-icon"
                />
                <span>
                    {selectedMatch
                    ? `${selectedMatch.home} vs ${selectedMatch.away} (${selectedMatch.date})`
                    : headerTitle}
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
          <div
            key={match.id}
            className="dropdown-item"
            onClick={() => handleSelect(match)}
          >
            <h3>{match.home}</h3>
            <img src={match.homeSrc}/>
            <h2>{match.score}</h2>
            <img src={match.awaySrc}/>
            <h3>{match.away}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchDropdown;
