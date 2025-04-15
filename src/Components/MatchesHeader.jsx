//dependancies
import "./MatchesHeader.css"
import {useState, useRef, useEffect} from "react";

//Assets
import Logo from "../assets/finalizedLogo-removebg-small.png";
import Calendar from "../assets/navBarIcons/CalendarIcon.png";
import Clock from "../assets/navBarIcons/ClockIcon.png";
import Search from "../assets/navBarIcons/SearchIcon.png";
import React from "react";

function MatchesHeader(){

    const [centerDate, setCenterDate] = useState(new Date());
    const scrollContainerRef = useRef(null);

    const generateDates = (center, past, future) => {
        const firstHalf = [];
        const secondHalf = [];

        // Past Dates
        for (let i = past; i > 0; i--) {
          const d = new Date(center);
          d.setDate(d.getDate() - i);
          firstHalf.push(d);
        }
    
        // Future Dates
        for (let i = 1; i <= future; i++) {
          const d = new Date(center);
          d.setDate(d.getDate() + i);
          secondHalf.push(d);
        }
    
        return {
            firstHalf,
            middle:[
                {text: "Yesterday"},
                {text: "Today"},
                {text: "Tomorrow"},
            ],
            secondHalf
        };
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        
        if (container) {
          const middleElements = container.querySelector('.matches-header-scroll-middle-container');
          
          if (middleElements) {
            const middleOffset = middleElements.offsetLeft + (middleElements.offsetWidth / 2) - (container.offsetWidth / 2);
            
            container.scrollTo({
              left: middleOffset,
              behavior: 'smooth'  // optional for cool animation
            });
          }
        }
      }, []);
      

    const {firstHalf, middle, secondHalf} = generateDates(centerDate, 20, 20);

    return(

        <div>
            {/**Top half with the logo*/}
            <div className="matches-header-container">
                <img src={Logo}></img>
                <div className="matches-header-buttons-container">
                    <img src={Calendar}></img>
                    <img src={Clock}></img>
                    <img src={Search}></img>
                </div>
            </div>
            {/**Scroll bar part */}
            <div className="matches-header-scroll-container" ref={scrollContainerRef}>
                {/**Maps sliderFirstHalf then the common ones then the second half */}
                {firstHalf.map((date, index) => (
                    <button>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</button>
                ))}
                <div className="matches-header-scroll-middle-container">
                    {middle.map((date, index) => (
                        <button>{date.text}</button>
                    ))}
                </div>
                {secondHalf.map((date, index) => (
                    <button>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</button>
                ))};
            </div>
        </div>
    );

}

export default MatchesHeader;