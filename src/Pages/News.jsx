import "./News.css";

//assets
import PopularityIcon from "../assets/navBarIcons/PopularityIcon.png";
import PopularityDownIcon from "../assets/navBarIcons/PopularityDownIcon.png";
import examplePopularImage from "../assets/newsImages/maxresdefault.jpg";
import exampleLeastImage from "../assets/newsImages/rmaUCL.jpg";
import exampleNewsCitation from "../assets/newsLogos/31gdOwxg4oL.png";
import exampleLeastCitation from "../assets/newsLogos/90mins.png";
import cavan from "../assets/newsImages/cavanNewsHeadline.jpg";

import NewsArticle from "../Components/NewsArticle";

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
                            <h6 className="news-content-most-popular-footer-citation-text">Daily Mail - 1 hour{1 > 1 ? "s" : ""} ago</h6>
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
                            <h6 className="news-content-most-popular-footer-citation-text">90 mins - 20 hour{20 > 1 ? "s" : ""} ago</h6>
                        </div>
                    </div>
                </div>
                <NewsArticle imgSrc={cavan} articleHeadline="Man City devise record breaking transfer timeline for 15 year old Cavan Sullivan" articleCitationSrc={exampleLeastCitation} articleCitationName="90 mins" articleCitationHours={1}/>
                <NewsArticle imgSrc={cavan} articleHeadline="Man City devise record breaking transfer timeline for 15 year old Cavan Sullivan" articleCitationSrc={exampleLeastCitation} articleCitationName="90 mins" articleCitationHours={1}/>
                <NewsArticle imgSrc={cavan} articleHeadline="Man City devise record breaking transfer timeline for 15 year old Cavan Sullivan" articleCitationSrc={exampleLeastCitation} articleCitationName="90 mins" articleCitationHours={1}/>
                <NewsArticle imgSrc={cavan} articleHeadline="Man City devise record breaking transfer timeline for 15 year old Cavan Sullivan" articleCitationSrc={exampleLeastCitation} articleCitationName="90 mins" articleCitationHours={1}/>
                <NewsArticle imgSrc={cavan} articleHeadline="Man City devise record breaking transfer timeline for 15 year old Cavan Sullivan" articleCitationSrc={exampleLeastCitation} articleCitationName="90 mins" articleCitationHours={1}/>
            </div>
        </div>
    );
}

export default News;