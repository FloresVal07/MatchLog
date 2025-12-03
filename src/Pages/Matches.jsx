import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext.jsx";
import "./Matches.css";
import MatchesHeader from "../Components/MatchesHeader";
import MatchDropdown from "../Components/MatchDropDown";

function Matches() {
  const { leagues, loading } = useContext(DataContext);

  console.log(leagues);

  return loading ? (
    <p>Loading data...</p>
  ) : (
    <div className="match-body-container">
      <MatchesHeader />
      <h1>Matches</h1>
      <MatchDropdown
        leagueInstance={leagues[0]}
      />
    </div>
  );
}

export default Matches;
