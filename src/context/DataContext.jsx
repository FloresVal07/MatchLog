// src/context/DataContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaguesRes = await axios.get("http://localhost:4000/leagues");
        const clubsRes = await axios.get("http://localhost:4000/clubs");
        const playersRes = await axios.get("http://localhost:4000/players");
        const matchesRes = await axios.get("http://localhost:4000/matches");

        setLeagues(leaguesRes.data);
        setClubs(clubsRes.data);
        setPlayers(playersRes.data);
        setMatches(matchesRes.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ leagues, clubs, players, matches, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
