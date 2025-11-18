import React, { useState } from "react";
import { DataContext } from "../context/DataContext.jsx";
import "./Leagues.css";


import SearchIcon from "../assets/navBarIcons/searchIcon.png";
import MatchDropdown from "../Components/MatchDropDown.jsx"; 

const ManCity = "/assets/teamIcons/manchester_city.png";
const LeicesterCity = "/assets/teamIcons/leicester_city.png";

const LaLiga = "/assets/leagueIcons/la_liga.png";
const PremierLeague = "/assets/leagueIcons/premier_league_white.png";
const championsLeague = "/assets/leagueIcons/champions_league.png";
const europaLeague = "/assets/leagueIcons/europa_league.png";
const copaAmerica = "/assets/leagueIcons/copa_america.png";
const euros = "/assets/leagueIcons/euros.png";
const worldCup = "/assets/leagueIcons/world_cup.png";
const ligueUr = "/assets/leagueIcons/ligue_1.png";
const bundesliga = "/assets/leagueIcons/bundesliga.png";
const serieA = "/assets/leagueIcons/serie_a.png";



function Following() {
    const [search, setSearch] = useState("");

    const laLigaMatches = [
        {
            id: 1,
            home: "Manchester City",
            homeSrc: ManCity,
            homeAlt: "Manchester City Crest",
            away: "Leicester City",
            awaySrc: LeicesterCity,
            awayAlt: "Leicester Crest",
            score: "2 - 0",
            date: "2025-04-10",
            fullTime: true
        },
    ];

    /*
    // Array of leagues
    const leagues = [
        { headerTitle: "La Liga", headerImageSrc: LaLiga, aliases: ["laliga", "spanish league"], headerImageAlt: "La Liga Logo", matches: laLigaMatches },
        { headerTitle: "Premier League", headerImageSrc: PremierLeague, aliases: ["england", "english league"], headerImageAlt: "Premier League Logo", matches: laLigaMatches },
        { headerTitle: "Champions League", headerImageSrc: championsLeague, aliases: ["ucl", "european trophy", "Europe"], headerImageAlt: "Champions League Logo", matches: laLigaMatches },
        { headerTitle: "Europa League", headerImageSrc: europaLeague, aliases: ["shit ass league"], headerImageAlt: "Europa League Logo", matches: laLigaMatches },
        { headerTitle: "Copa America", headerImageSrc: copaAmerica, aliases: ["America", "Copa"], headerImageAlt: "Copa America Logo", matches: laLigaMatches },
        { headerTitle: "Euros", headerImageSrc: euros, aliases: ["Europe"], headerImageAlt: "Euro League Logo", matches: laLigaMatches },
        { headerTitle: "World Cup", headerImageSrc: worldCup, aliases: ["Mundial", "worldcup"], headerImageAlt: "World Cup Logo", matches: laLigaMatches },
        { headerTitle: "Ligue One", headerImageSrc: ligueUr, aliases: ["france", "french league"], headerImageAlt: "Ligue One Logo", matches: laLigaMatches },
        { headerTitle: "Bundesliga", headerImageSrc: bundesliga, aliases: ["germany", "german league"], headerImageAlt: "Bundesliga Logo", matches: laLigaMatches },
        { headerTitle: "Serie A", headerImageSrc: serieA, aliases: ["scudetto", "italian league"], headerImageAlt: "Serie A Logo", matches: laLigaMatches },
        { headerTitle: "Padder", headerImageSrc: "", headerImageAlt: "Padder League", matches: laLigaMatches}
    ];*/

    const {leagues} = React.useContext(DataContext);

    leagues.map(league => {
        league.matches = laLigaMatches;
    });

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

export default Following;