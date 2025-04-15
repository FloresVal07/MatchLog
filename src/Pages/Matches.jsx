import MatchesHeader from "../Components/MatchesHeader";
import MatchDropdown from "../Components/MatchDropDown"
import "./Matches.css";

function Matches(){
    const matches = [
        {
          id: 1,
          home: "Team A",
          away: "Team B",
          score: "2 - 1",
          date: "2025-04-10",
        },
        {
          id: 2,
          home: "Team C",
          away: "Team D",
          score: "1 - 1",
          date: "2025-04-11",
        },
        // Add more...
    ];
      
    return(
        <div className="match-body-container">
            <MatchesHeader/>
            <h1>Matches</h1>
            <MatchDropdown matches={matches}></MatchDropdown>
        </div>
    );
}

export default Matches;