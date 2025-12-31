import { convertToFileSyntax } from "./utils.js";

const MatchDropdown = ({ leagueInstance }) => {
  const headerImageSrc = `/assets/leagueIcons/${convertToFileSyntax(leagueInstance.name)}.png`;

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <div>
          <img src={headerImageSrc} alt={`${leagueInstance.name} Logo`} className="dropdown-following-icon" />
          <span> {leagueInstance.name} </span>
        </div>
      </div>
      <div className={`dropdown-list`}>
      </div>
    </div>
  );
};

export default MatchDropdown;
