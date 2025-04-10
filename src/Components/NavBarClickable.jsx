import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBarClickable.css";

function NavBarClickable({ text, to, imgSrc1, imgSrc2, index, activeIndex, setActiveIndex }) {
    const handleClick = () => {
        setActiveIndex(index); // Set the active index when clicked
    };

    return (
        <div className="container">
            <Link to={to}
                  className={`link ${activeIndex === index ? 'active' : ''}`}
                  onClick={handleClick}>
                <img src={imgSrc1} alt={text} />
                {text}
            </Link>
        </div>
    );
}

export default NavBarClickable;
