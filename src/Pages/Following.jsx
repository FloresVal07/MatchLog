const API_URI = import.meta.env.VITE_API_URI;
import "./Following.css";
import { DataContext } from "../context/DataContext.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import BoxedIconTeam from "../Components/BoxedIconTeam.jsx";
import BoxedIconPlayer from "../Components/BoxedIconPlayer.jsx";
import LoadingPage from "../Components/LoadingPage.jsx";

function Following() {
  const { clubs, loading } = useContext(DataContext);
  const [ loadingPlayers, setLoadingPlayers ] = useState(true);
  const [ selectedClubs, setSelectedClubs ] = useState([]);
  const [players, setPlayers] = useState([]);

  // Fetch matches
  useEffect(() => {

    if(selectedClubs.length === 0) return;

    const fetchDataSingular = async () => {
      try {
        console.log("FETCHED PLAYERS FOR : ", selectedClubs[0].name);
        const playersRes = await axios.get(
          `${API_URI}/players/club/${selectedClubs[0]._id}`
        );
        setLoadingPlayers(false);
        setPlayers(playersRes.data);
      } catch (err) {
        console.error("Error fetching data: within Following.jsx", err);
      }
    };

    const fetchDataPlural = async () => {
      console.log(selectedClubs.map(club => club._id).join(","));
      try {
        selectedClubs.map((club) => {
          console.log("FETCHED PLAYERS FOR : ", club.name);
        });

        const playersRes = await axios.get(
          `${API_URI}/players/clubs/${selectedClubs.map(club => club._id).join(",")}`
        );
        setLoadingPlayers(false);
        setPlayers(playersRes.data);
      } catch (err) {
        console.error("Error fetching data: within Following.jsx", err);
      }
    };
    if(selectedClubs.length === 1) {
      fetchDataSingular();
    } else if(selectedClubs.length > 1) {
      fetchDataPlural();
    }
  }, [selectedClubs]);

  const handleClubSelect = (club) => {
    if(selectedClubs.includes(club)) {
      console.log("Club already selected:", club.name);
    }else{
      setSelectedClubs(prev => [...prev, club]);
      setLoadingPlayers(true);
    }
  }

  const handleClubReset = () => {
    setSelectedClubs([]);
    setLoadingPlayers(true);
  }

  return (
    loading ? (
      <LoadingPage text={"Loading clubs"}/>
    ) : (
      <div>
        <div className="following-header">
          <h1>Following</h1>
        </div>
        <div className="following-content">
          <div className="following-content-container">
            <button className="reset-button" onClick={() => handleClubReset()}>Reset Selection</button>
            {clubs.map((club, i) => (
              <BoxedIconTeam key={i} clubInput={club} onClick={(club) => handleClubSelect(club)}/>
            ))}
          </div>
          {loadingPlayers ? (
            <LoadingPage text={"Loading players"}/>
          ) : (
            <div className="following-content-container" style={{ backgroundColor: "lightblue" }}>
              {players.map((player, i) => (
                <BoxedIconPlayer key={i} playerInput={player} onClick={(player) => console.log(`${player.name} selected`)}/>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
}


export default Following;