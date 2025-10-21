import MatchesHeader from "../Components/MatchesHeader";
import MatchDropdown from "../Components/MatchDropDown";
const ManCity = "/assets/teamIcons/manchester_city.png";
const LeicesterCity = "/assets/teamIcons/leicester_city.png";
const Liverpool = "/assets/teamIcons/liverpool.png";
const Everton = "/assets/teamIcons/everton.png";
const AtleticoMadrid = "/assets/teamIcons/atletico_madrid.png";
const Barcelona = "/assets/teamIcons/barcelona.png";
const AcMilan = "/assets/teamIcons/ac_milan.png";
const InterMilan = "/assets/teamIcons/inter_milan.png";
const LAFC = "/assets/teamIcons/lafc.png";
const InterMiami = "/assets/teamIcons/inter_miami.png";
const Spain = "/assets/teamIcons/spain.png";
import FollowingIcon from "../assets/navBarIcons/FollowingIconFilledIn.png";
import "./Matches.css";

function Matches(){
    const matches = [
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
        {
            id: 2,
            home: "Liverpool",
            homeSrc: Liverpool,
            homeAlt: "Liverpool Crest",
            away: "Everton",
            awaySrc: Everton,
            awayAlt: "Everton Crest",
            score: "1 - 0",
            date: "2025-04-11",
            fullTime: false
        },
        {
            id: 3,
            home: "Atletico Madrid",
            homeSrc: AtleticoMadrid,
            homeAlt: "Atletico Madrid Crest",
            away: "Barcelona",
            awaySrc: Barcelona,
            awayAlt: "Barcelona Crest",
            score: "0 - 1",
            aggregateScore: "(4 - 5)",
            date: "2025-04-11",
            fullTime: false
        },
        {
            id: 4,
            home: "Ac Milan",
            homeSrc: AcMilan,
            homeAlt: "AC Milan Crest",
            away: "Inter Milan",
            awaySrc: InterMilan,
            awayAlt: "Inter Milan Crest",
            score: "1 - 1",
            aggregateScore: "(1 - 1)",
            date: "2025-04-11",
            fullTime: false
        },
        {
            id: 5,
            home: "LAFC",
            homeSrc: LAFC,
            homeAlt: "LA FC Crest",
            away: "Inter Miami",
            awaySrc: InterMiami,
            awayAlt: "Inter Miami Crest",
            score: "1 - 0",
            date: "2025-04-11",
            fullTime: false
        }
    ];

    const matchesSpain = [
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
    ]
      
    return(
        <div className="match-body-container">
            <MatchesHeader/>
            <h1>Matches</h1>
            <MatchDropdown matches={matches} headerTitle="Favorites" headerImageSrc={FollowingIcon} headerImageAlt="Image Of A Star For The Favourite DropDown List"></MatchDropdown>
            <MatchDropdown matches={matchesSpain} headerTitle="Spain" headerImageSrc={Spain} headerImageAlt="Image Of the Spanish Flag"></MatchDropdown>
        </div>
    );
}

export default Matches;