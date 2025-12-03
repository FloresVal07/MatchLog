import "./Following.css";
import { DataContext } from "../context/DataContext.jsx";
import {useContext} from "react";

import BoxedIconTeam from "../Components/BoxedIconTeam.jsx";
import BoxedIconPlayer from "../Components/BoxedIconPlayer.jsx";

function Following() {
  const { clubs, players, loading } = useContext(DataContext);

  return (
    <div>
      <div className="following-header">
        <h1>Following</h1>
      </div>

      <div className="following-content">
        {loading ? (
          <p>Loading data...</p> // <== will show immediately
        ) : (
          <>
            <div className="following-content-container">
              {clubs.map((club, i) => (
                <BoxedIconTeam key={i} clubInput={club} />
              ))}
            </div>
            <div className="following-content-container" style={{ backgroundColor: "lightblue" }}>
              {players.map((player, i) => (
                <BoxedIconPlayer key={i} playerInput={player} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}


export default Following;