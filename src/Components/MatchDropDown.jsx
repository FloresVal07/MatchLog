import { useState } from "react";
import "./MatchDropDown.css";

const MatchDropdown = ({ matches }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleSelect = (match) => {
    setSelectedMatch(match);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedMatch
          ? `${selectedMatch.home} vs ${selectedMatch.away} (${selectedMatch.date})`
          : "Select a match"}
      </div>

      <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
        {matches.map((match) => (
          <div
            key={match.id}
            className="dropdown-item"
            onClick={() => handleSelect(match)}
          >
            {match.home} vs {match.away} ({match.date})
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchDropdown;
