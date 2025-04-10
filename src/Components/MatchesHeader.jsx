import "./MatchesHeader.css"
import Logo from "../assets/finalizedLogo-removebg-small.png";
import Calendar from "../assets/navBarIcons/CalendarIcon.png";
import Clock from "../assets/navBarIcons/ClockIcon.png";
import Search from "../assets/navBarIcons/SearchIcon.png";

function MatchesHeader(){

    return(
        <div>
            <div className="matches-header-container">
                <img src={Logo}></img>
                <div className="matches-header-buttons-container">
                    <img src={Calendar}></img>
                    <img src={Clock}></img>
                    <img src={Search}></img>
                </div>
            </div>
            <div className="matches-header-scroll-container">
                <h2>Apr 02</h2>
                <h2>Yesterday</h2>
                <h2>Today</h2>
                <h2>Tomorrow</h2>
                <h2>Apr 06</h2>
            </div>
        </div>
    );

}

export default MatchesHeader;