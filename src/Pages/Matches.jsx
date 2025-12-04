import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext.jsx";
import "./Matches.css";
import MatchesHeader from "../Components/MatchesHeader";
import MatchDropDownBarebones from "../Components/MatchDropDownBarebones.jsx";
import axios from "axios";

function Matches() {

  //will be fetched from the frontend later specifically from MatchesHeader but not right now
  const todaysDate = "2025-09-20";

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchesRes = await axios.get(`http://localhost:4000/matches/date/${todaysDate}`);
        setMatches(matchesRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: within Matches.jsx", err);
      }
    };

    fetchData();
  }, []);

  const leagueMap = {};

  matches.forEach(match => {
    if(!leagueMap[match.league.name]){
      leagueMap[match.league.name] = [];
    }
    leagueMap[match.league.name].push(match);
  }); 

  const groupedLeagues = Object.keys(leagueMap).map(leagueName => ({
    name: leagueName,
    matches: leagueMap[leagueName]
  }));

  return loading ? (
    <p>Loading data...</p>
  ) : (
    <div className="match-body-container">
      <MatchesHeader />
      <h1>Matches</h1>  
      {groupedLeagues.map(league => (
        <MatchDropDownBarebones leagueName={league.name} matches={league.matches} />
      ))}
    </div>
  );
}

export default Matches;
