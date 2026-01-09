// src/context/DataContext.jsx
const API_URI = import.meta.env.VITE_API_URI;
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaguesRes = await axios.get(`${API_URI}/leagues`);
        const clubsRes = await axios.get(`${API_URI}/clubs`);

        setLeagues(leaguesRes.data);
        setClubs(clubsRes.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ leagues, clubs, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
