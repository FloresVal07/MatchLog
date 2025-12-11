import { useRef, useEffect, useState } from "react";
import { generateDates } from "../Components/utils.js";
import "./Matches.css";
import MatchDropDownBarebones from "../Components/MatchDropDownBarebones.jsx";
import axios from "axios";

import Logo from "../assets/websiteLogos/finalizedLogo-removebg-small.png";
import Calendar from "../assets/navBarIcons/CalendarIcon.png";
import Clock from "../assets/navBarIcons/ClockIcon.png";
import Search from "../assets/navBarIcons/SearchIcon.png";

function Matches() {
  // will be fetched from the frontend later
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [centerDate, setCenterDate] = useState(new Date());
  const scrollContainerRef = useRef(null);

  const { firstHalf, middle, secondHalf } = generateDates(centerDate, 20, 20);

  // Fetch matches
  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchesRes = await axios.get(
          `http://localhost:4000/matches/date/${centerDate.toISOString().split("T")[0]}`
        );
        setMatches(matchesRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: within Matches.jsx", err);
      }
    };
    fetchData();
  }, [centerDate]);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const middleElements = container.querySelector(
      ".matches-header-scroll-middle-container"
    );

    if (middleElements) {
      const middleOffset =
        middleElements.offsetLeft +
        middleElements.offsetWidth / 2 -
        container.offsetWidth / 2;

      container.scrollTo({
        left: middleOffset,
        behavior: "smooth",
      });
    }
  }, [firstHalf, middle, secondHalf]); // rerun after dates are rendered

  // Group matches by league
  const leagueMap = {};
  matches.forEach((match) => {
    if (!leagueMap[match.league.name]) {
      leagueMap[match.league.name] = [];
    }
    leagueMap[match.league.name].push(match);
  });

  const groupedLeagues = Object.keys(leagueMap).map((leagueName) => ({
    name: leagueName,
    matches: leagueMap[leagueName],
  }));

  return loading ? (
    <p>Loading data...</p>
  ) : (
    <div className="match-body-container">
      {/* Header */}
      <div className="matches-header-container">
        <img src={Logo} alt="Logo" />
        <div className="matches-header-buttons-container">
          <img src={Calendar} alt="Calendar" />
          <img src={Clock} alt="Clock" />
          <img src={Search} alt="Search" />
        </div>
      </div>

      {/* Scrollable dates */}
      <div
        className="matches-header-scroll-container"
        ref={scrollContainerRef}
      >
        {firstHalf.map((date, index) => (
          <button key={`first-${index}`} onClick={() => setCenterDate(date)}>
            {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </button>
        ))}
        <div className="matches-header-scroll-middle-container">
          {middle.map((date, index) => (
            <button key={`middle-${index}`} onClick={() => setCenterDate(date)}>
              {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </button>
          ))}
        </div>
        {secondHalf.map((date, index) => (
          <button key={`second-${index}`} onClick={() => setCenterDate(date)}>
            {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </button>
        ))}
      </div>

      <h1>Matches</h1>
      {groupedLeagues.map((league) => (
        <MatchDropDownBarebones
          key={league.name}
          leagueName={league.name}
          matches={league.matches}
        />
      ))}
    </div>
  );
}

export default Matches;
