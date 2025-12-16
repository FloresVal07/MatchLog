import { useEffect } from "react";
import { convertToFileSyntax } from "./utils.js";
import "./MatchDropDown.css";

const MatchDropdown = ({ leagueInstance }) => {
  const headerImageSrc = `/assets/leagueIcons/${convertToFileSyntax(leagueInstance.name)}.png`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchesRes = await axios.get(`http://localhost:4000/matches/league/${leagueInstance._id}`);
        setMatches(matchesRes.data);
      } catch (err) {
        console.error("Error fetching data: within MatchDropdown", err);
      }
    };

    fetchData();
  }, []);

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
