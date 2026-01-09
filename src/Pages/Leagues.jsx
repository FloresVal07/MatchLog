import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../context/DataContext.jsx";
import { convertToCompactLowercase } from "../Components/utils.js";
import "./Leagues.css";

import SearchIcon from "../assets/navBarIcons/SearchIcon.png";
import LeagueDropDown from "../Components/LeagueDropDown.jsx"; 
import LoadingPage from "../Components/LoadingPage.jsx";

function Leagues() {
    const [search, setSearch] = useState("");
    const leagueAliasMap = {
        "Bundesliga": ["German Bundesliga", "BL", "Germany League"].map(convertToCompactLowercase),
        "Serie A": ["Italian Serie A", "Italy Top League", "Calcio"].map(convertToCompactLowercase),
        "Primeira Liga": ["Portuguese Primeira Liga", "Portugal League", "Liga Portugal"].map(convertToCompactLowercase),
        "Primera Division": ["La Liga", "Spanish Primera Division", "Liga Española", "LaLiga"].map(convertToCompactLowercase)
    };

    const {leagues, loading} = React.useContext(DataContext);

    // Filter leagues by search input
    const filteredLeagues = leagues.filter(league => {
        const searchTerm = convertToCompactLowercase(search);
        return (
            league.name.toLowerCase().includes(searchTerm) ||
            (leagueAliasMap[league.name] && leagueAliasMap[league.name].some(alias => alias.includes(searchTerm)))
        );
    });

    return (
        loading ? (
            <LoadingPage text={"Loading leagues"}/>
        ) : ( 
            <div className="leagues-body-container">
            <div className="leagues-header">
                <div className="leagues-header-container">
                    <h1 className="leagues-header-title">Leagues</h1>
                    <div className="leagues-header-search">
                        <img src={SearchIcon} alt="search" className="leagues-header-search-icon"/>
                        <input
                            type="text"
                            placeholder="Search for leagues..."
                            className="leagues-header-search-input"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="leagues-content-container">
                {filteredLeagues.map(league => (
                    <Link 
                        key={league.name} 
                        to={`/leagues/${league.name}`} 
                        className="league-link-wrapper"
                    >
                        <LeagueDropDown leagueInstance={league} />
                    </Link>
                ))}
            </div>
        </div>
        )
    );
}

export default Leagues;