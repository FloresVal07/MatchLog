import "./LeaguePage.css";
import LoadingPage from "../Components/LoadingPage.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { convertToFileSyntax } from "../Components/utils.js";
import axios from 'axios';

function LeaguePage() {
    const { leagueSlug } = useParams(); 
    const [ currentLeague, setCurrentLeague ]  = useState(null);
    const [ selectedRound, setSelectedRound ] = useState(null);
    const [ today, setToday ] = useState(new Date())
    const [ matches, setMatches ] = useState([]);
    const [ currentTOTW, setCurrentTOTW] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const handleRoundDown = () => {
        if(selectedRound > 1){
            setSelectedRound(selectedRound-1);
        }
    }
    const handleRoundUp = () => {
        if(selectedRound < currentLeague.numberOfRounds){
            setSelectedRound(selectedRound+1);
        }
    }



    useEffect(() => {
        console.log(`Fetching ${leagueSlug}`);
        const fetchData = async () => {
          try {
            const leagueRes = await axios.get(
              `http://localhost:4000/leagues/${leagueSlug}`
            );
            setCurrentLeague(leagueRes.data);
            if (leagueRes.data.currentRound) {
                setSelectedRound(leagueRes.data.currentRound);
            }
          } catch (err) {
            console.error("Error fetching data: within LeaguePage.jsx", err);
          }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchMatches = async () => {
            if(!currentLeague){console.log("current league is empty"); return;}
            if(!selectedRound){console.log("current round is empty"); return;}
            try {
                const matchesRes = await axios.get(
                `http://localhost:4000/matches/round/${(currentLeague._id).toString()}/${selectedRound}`
                );
                setMatches(matchesRes.data);
            } catch (err) {
                console.error("Error fetching data: within LeaguePage.jsx", err);
            }
        };
        fetchMatches();
    }, [selectedRound, currentLeague?._id]);

    useEffect(() => {
        console.log("Checking dependencies:", { 
            leagueId: currentLeague?._id, 
            round: selectedRound 
        });
        const fetchTOTW = async () => {
            if(!currentLeague){console.log("current league is empty"); return;}
            if(!selectedRound){console.log("current round is empty"); return;}
            try {
                const totwRes = await axios.get(
                `http://localhost:4000/totw/round/${(currentLeague._id).toString()}/10`
                );
                setCurrentTOTW(totwRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data: within LeaguePage.jsx", err);
            }
        };
        fetchTOTW();
    }, [selectedRound, currentLeague?._id])

    return (
        (loading || !currentLeague || !today) ? (
            <LoadingPage text="Loading League"/>
        ) : (
            <div className="league-page-wrapper">
                <header className="league-header">
                    <div className="league-header-content">
                    <img src={`/assets/leagueIcons/${convertToFileSyntax(currentLeague.name)}.png`} className="league-main-logo" alt="La Liga" />
                    <div className="league-title-info">
                        <h1 className="league-header-title">{currentLeague.name}</h1>
                        <p className="league-subtitle">{currentLeague.country} • {currentLeague.season}</p>
                    </div>
                    </div>
                </header>

                <main className="league-dashboard-content">
                    <section className="league-main-column">
                        {/* Main Table */}
                        <div className="card">
                            <h3 className="card-title">League Table</h3>
                            <table className="standings-table">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th className="text-left">Team</th>
                                <th>PL</th>
                                <th>GD</th>
                                <th>PTS</th>
                                <th>Form</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentLeague.standings.table.map((row) => (
                                <tr key={row.position}>
                                    <td>{row.position}</td>
                                    <td className="team-cell">
                                    <img src={`/assets/teamIcons/${convertToFileSyntax(row.club.name)}.png`} alt="" />
                                    <span>{row.club.name}</span>
                                    </td>
                                    <td>{row.playedGames}</td>
                                    <td>{row.goalsDifference}</td>
                                    <td className="bold-text">{row.points}</td>
                                    <td>
                                        <div className="form-row">
                                            {row.form.map((res, i) => (
                                                <span key={i} className={`form-dot ${res}`}>{res}</span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>

                        {/* Player Stats Grid 
                            title: "Top Scorers", icon: "⚽", data: [["Robert Lewandowski", 15]] 
                        */}
                        <div className="stat-cards-container">
                            {Object.entries(currentLeague.stats).map(([key, players], idx) => {
                                const config = {
                                    topScorers: { title: "Top Scorers", icon: "⚽", field: "goals" },
                                    topAssisters: { title: "Top Assists", icon: "👟", field: "assists" },
                                    topSavers: { title: "Top Saves", icon: "🧤", field: "saves" }
                                };

                                const current = config[key];
                                if (!current) return null;

                                return (
                                    <div className="card stat-card" key={key}>
                                        <div className="stat-card-title-holder">
                                            <img 
                                                src={`/assets/navBarIcons/${current.field}.png`} 
                                                className="card-title image" 
                                                alt={current.title}
                                            />
                                            <h3 className="card-title small">
                                                {current.title}
                                            </h3>
                                        </div>
                                        <div className="stat-list">
                                            {players.map((entry, i) => (
                                                /* The stat-row will now use justify-content: space-between in CSS */
                                                <div className="stat-row" key={entry._id || i}>
                                                    <div className="stat-player-info">
                                                        <span className="stat-rank">{i + 1}</span>
                                                        <img 
                                                            src={`/assets/playerIcons/${convertToFileSyntax(entry.player?.name)}.png`} 
                                                            className="stat-picture"
                                                            alt=""
                                                        />
                                                        <span className="stat-name">{entry.player?.name}</span>
                                                    </div>
                                                    
                                                    {/* This container will now be pushed to the max right */}
                                                    <div className="stat-player-value-container">
                                                        <span className="stat-value">{entry[current.field]}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <aside className="league-side-column">
                    {/* Pitch Section WILL PULL FROM A TEAM OF THE WEEK DATABASE STORE*/}
                    <div className="card">
                        <h3 className="card-title">Team of the Week</h3>
                        {currentTOTW.length === 0 ? (
                            <LoadingPage />
                        ) : (
                            <div className="pitch-container">
                                <div className="pitch-line center-circle"></div>
                                <div className="pitch-line penalty-area"></div>
                                <div className="pitch-player p-fw" style={{top: '5%', left: '42%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[10].player.name)}.png`}/></div>
                                <div className="pitch-player p-fw" style={{top: '25%', left: '10%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[9].player.name)}.png`}/></div>
                                <div className="pitch-player p-fw" style={{top: '25%', left: '42%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[8].player.name)}.png`}/></div>
                                <div className="pitch-player p-fw" style={{top: '25%', left: '75%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[7].player.name)}.png`}/></div>
                                <div className="pitch-player p-mf" style={{top: '45%', left: '23%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[6].player.name)}.png`}/></div>
                                <div className="pitch-player p-mf" style={{top: '45%', left: '63%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[5].player.name)}.png`}/></div>
                                <div className="pitch-player p-df" style={{top: '65%', left: '5%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[4].player.name)}.png`}/></div>
                                <div className="pitch-player p-df" style={{top: '65%', left: '30%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[3].player.name)}.png`}/></div>
                                <div className="pitch-player p-df" style={{top: '65%', left: '55%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[2].player.name)}.png`}/></div>
                                <div className="pitch-player p-df" style={{top: '65%', left: '80%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[1].player.name)}.png`}/></div>
                                <div className="pitch-player p-gk" style={{top: '85%', left: '42%'}}><img src={`/assets/playerIcons/${convertToFileSyntax(currentTOTW[0].squad[0].player.name)}.png`}/></div>
                            </div>
                        )}
                    </div>

                    {/* Fixtures Section */}
                    <div className="card">
                        <div className = "card-round-nav-container">
                            <button 
                                onClick={handleRoundDown} 
                                disabled={selectedRound <= 1}
                                className="card-round-nav-button"
                            >
                                ◀
                            </button>
                            <select 
                                value={selectedRound || ""} 
                                onChange={(e) => setSelectedRound(parseInt(e.target.value, 10))}
                                className="card-round-nav-select"
                            >
                                {Array.from({ length: currentLeague.numberOfRounds }).map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        Round {i + 1}
                                    </option>
                                ))}
                            </select>
                            <button 
                                onClick={handleRoundUp} 
                                disabled={selectedRound >= currentLeague.numberOfRounds}
                                className="card-round-nav-button"
                            >
                                ▶
                            </button>
                        </div>
                        <div className="fixture-item-container">
                            {matches.map((match, index) => (
                                (match?.date < today.toISOString()) ? (
                                    <div key={index} className="fixture-item">
                                        <img src={`/assets/teamIcons/${convertToFileSyntax(match.homeClub.name)}.png`} className="fixture-item-image"/>
                                        <span className="fixture-item-leftside-text">{match.homeClub.name}</span>
                                        <div className="fixture-badge">{match.score.home} : {match.score.away}</div>
                                        <span className="fixture-item-rightside">{match.awayClub.name}</span>
                                        <img src={`/assets/teamIcons/${convertToFileSyntax(match.awayClub.name)}.png`} className="fixture-item-image"/>
                                    </div>
                                ) : (
                                    <div key={index} className="fixture-item">
                                        <img src={`/assets/teamIcons/${convertToFileSyntax(match.homeClub.name)}.png`} className="fixture-item-image"/>
                                        <span className="fixture-item-leftside-text">{match.homeClub.name}</span>
                                        <div className="fixture-badge">VS</div>
                                        <span className="fixture-item-rightside">{match.awayClub.name}</span>
                                        <img src={`/assets/teamIcons/${convertToFileSyntax(match.awayClub.name)}.png`} className="fixture-item-image"/>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    </aside>
                </main>
            </div>
        )
    );
}

export default LeaguePage;
