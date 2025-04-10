import { useState } from 'react';
import "./NavBar.css";
import Following from "./assets/navBarIcons/FollowingIcon.png";
import Leagues from "./assets/navBarIcons/LeaguesIcon.png";
import Match from "./assets/navBarIcons/MatchIcon.png";
import News from "./assets/navBarIcons/NewsIcon.png";

import NavBarClickable from './Components/NavBarClickable.jsx';

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0);  // Track which item is active

    const items = [
        { text: "Matches", to: "/", imgSrc1: Match },
        { text: "News", to: "/news", imgSrc1: News },
        { text: "Leagues", to: "/leagues", imgSrc1: Leagues },
        { text: "Following", to: "/following", imgSrc1: Following },
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-options">
                {items.map((item, index) => (
                    <li key={index}>
                        <NavBarClickable
                            text={item.text}
                            to={item.to}
                            imgSrc1={item.imgSrc1}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
