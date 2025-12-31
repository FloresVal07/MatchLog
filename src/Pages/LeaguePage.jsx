import "./LeaguePage.css";
import LoadingPage from "../Components/LoadingPage.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { convertToFileSyntax } from "../Components/utils.js";
import axios from 'axios';

const LEAGUE_STATS = [
  { title: "Top Scorers", icon: "⚽", data: [["Robert Lewandowski", 15], ["Jude Bellingham", 12], ["Borja Mayoral", 10]] },
  { title: "Top Assists", icon: "👟", data: [["Alex Baena", 9], ["Nico Williams", 7], ["Ikay Gündogan", 6]] },
  { title: "Top Saves", icon: "🧤", data: [["Unai Simón", 54], ["Jan Oblak", 48], ["Marc-André ter Stegen", 42]] }
];

function LeaguePage() {
    const { leagueSlug } = useParams(); 
    const [ currentLeague, setCurrentLeague ]  = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        console.log(`Fetching ${leagueSlug}`);
        const fetchData = async () => {
          try {
            const leagueRes = await axios.get(
              `http://localhost:4000/leagues/${leagueSlug}`
            );
            setCurrentLeague(leagueRes.data);
            setLoading(false);
          } catch (err) {
            console.error("Error fetching data: within LeaguePage.jsx", err);
          }
        };
        fetchData();
      }, []);

    return (
        (loading || !currentLeague) ? (
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
                                // 1. Map the technical keys to human-readable titles and icons
                                const config = {
                                    topScorers: { title: "Top Scorers", icon: "⚽", field: "goals"},
                                    topAssisters: { title: "Top Assists", icon: "👟", field: "assists" },
                                    topSavers: { title: "Top Saves", icon: "🧤", field: "saves" }
                                };

                                const current = config[key];
                                if (!current) return null; // Safety check

                                return (
                                    <div className="card stat-card" key={key}>
                                        <div className="stat-card-title-holder">
                                            <img src={`/assets/navBarIcons/${current.field}.png`} className="card-title image"/>
                                            <h3 className="card-title small">
                                                {current.title}
                                            </h3>
                                        </div>
                                        <div className="stat-list">
                                            {players.map((entry, i) => (
                                                <div className="stat-row" key={entry._id || i}>
                                                    <div className="stat-player-info">
                                                        <span className="stat-rank">{i + 1}</span>
                                                        <span className="stat-name">{entry.player?.name}</span>
                                                    </div>
                                                    {/* Use entry[current.field] to dynamically get .goals, .assists, or .saves */}
                                                    <div className="stat-player-value-container"><span className="stat-value">{entry[current.field]}</span></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <aside className="league-side-column">
                    {/* Pitch Section */}
                    <div className="card">
                        <h3 className="card-title">Team of the Week</h3>
                        <div className="pitch-container">
                        <div className="pitch-line center-circle"></div>
                        <div className="pitch-line penalty-area"></div>
                        <div className="pitch-player p-fw" style={{top: '15%', left: '50%'}}><span>9.0</span></div>
                        <div className="pitch-player p-mf" style={{top: '45%', left: '25%'}}><span>8.5</span></div>
                        <div className="pitch-player p-mf" style={{top: '45%', left: '75%'}}><span>8.8</span></div>
                        <div className="pitch-player p-gk" style={{bottom: '10%', left: '50%'}}><span>7.9</span></div>
                        </div>
                    </div>

                    {/* Fixtures Section */}
                    <div className="card">
                        <h3 className="card-title">Next Fixture</h3>
                        <div className="fixture-item">
                        <span>Rayo Vallecano</span>
                        <div className="fixture-badge">21:00</div>
                        <span>Getafe</span>
                        </div>
                    </div>
                    </aside>
                </main>
            </div>
        )
    );
}

export default LeaguePage;
