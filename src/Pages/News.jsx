import "./News.css";
import PopularityIcon from "../assets/navBarIcons/PopularityIcon.png";
import PopularityDownIcon from "../assets/navBarIcons/PopularityDownIcon.png";
import examplePopularImage from "../assets/maxresdefault.jpg";
import exampleLeastImage from "../assets/rmaUCL.jpg";
import exampleNewsCitation from "../assets/31gdOwxg4oL.png";
import exampleLeastCitation from "../assets/90mins.png";

function News(){
    const newsOptions = [
        {headerText: "For You"},
        {headerText: "Latest"},
        {headerText: "Transfers"},
        {headerText: "Leagues"}
    ]
    return(
        <div>
            <div className="news-header">
                <div>
                    <h1 className="news-header-title">News</h1>
                    <div className="news-header-scroll-container">
                        {newsOptions.map((option, index) => (
                            <button>{option.headerText}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="news-content">
                <div className="news-content-most-popular">
                    <div className="news-content-most-popular-header">
                        <div className="news-content-popularity-icon-container"><img src={PopularityIcon} alt="popularity icon" className="news-content-popularity-icon"/></div>
                        <h2 className="news-content-most-popular-header-text">Most Popular</h2>
                    </div>
                    <img src={examplePopularImage} alt="Most trending image header for article" className="news-content-popularity-image"/>
                    <div className="news-content-most-popular-footer">
                        <h4 className="news-content-most-popular-footer-text">Europa League News: Harry Maguire the absolute goat scores the last minute winner to put yanited through to the Semi Finals</h4>
                        <div className="news-content-most-popular-footer-citation">
                            <img src={exampleNewsCitation} alt="news citation image" className="news-content-most-popular-footer-citation-image"/>
                            <h6 className="news-content-most-popular-footer-citation-text">Daily Mail -</h6>
                            <h6 className="news-content-most-popular-footer-citation-text">1 hour ago</h6>
                        </div>
                    </div>
                </div>
                <div className="news-content-most-popular">
                    <div className="news-content-most-popular-header">
                        <div className="news-content-popularity-icon-container"><img src={PopularityDownIcon} alt="popularity icon" className="news-content-popularity-icon"/></div>
                        <h2 className="news-content-most-popular-header-text">Least Popular</h2>
                    </div>
                    <img src={exampleLeastImage} alt="Most trending image header for article" className="news-content-popularity-image"/>
                    <div className="news-content-most-popular-footer">
                        <h4 className="news-content-most-popular-footer-text">Boring ass glory hunting team wins sum european trophy</h4>
                        <div className="news-content-most-popular-footer-citation">
                            <img src={exampleLeastCitation} alt="news citation image" className="news-content-most-popular-footer-citation-image"/>
                            <h6 className="news-content-most-popular-footer-citation-text">90 Mins -</h6>
                            <h6 className="news-content-most-popular-footer-citation-text">20 hours ago</h6>
                        </div>
                    </div>
                </div>
                <h2>FILLLERR</h2>
                <h2>FILLLERR</h2>
            </div>
        </div>
    );
}

export default News;