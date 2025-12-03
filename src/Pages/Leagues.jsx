import React, { useState } from "react";
import { DataContext } from "../context/DataContext.jsx";
import "./Leagues.css";

import SearchIcon from "../assets/navBarIcons/searchIcon.png";
import MatchDropdown from "../Components/MatchDropDown.jsx"; 


function Leagues() {
    const [search, setSearch] = useState("");

    const {leagues} = React.useContext(DataContext);

    // Filter leagues by search input
    const filteredLeagues = leagues.filter(league => {
        const searchTerm = search.toLowerCase();
        return (
            league.name.toLowerCase().includes(searchTerm) ||
            (league.aliases && league.aliases.some(alias => alias.includes(searchTerm)))
        );
    });

    return (
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
                {console.log(filteredLeagues)}
                {
                filteredLeagues.map(league => (
                    <MatchDropdown
                        key={league.name}
                        leagueInstance={league}
                        matches={league.matches}
                    />
                ))}
            </div>
        </div>
    );
}

export default Leagues;