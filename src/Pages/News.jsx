const API_URI = import.meta.env.VITE_API_URI;
import "./News.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingPage from "../Components/LoadingPage";
import { timeAgo } from "../Components/utils.js";
//assets
import PopularityIcon from "../assets/navBarIcons/PopularityIcon.png";
import PopularityDownIcon from "../assets/navBarIcons/PopularityDownIcon.png";

import NewsArticle from "../Components/NewsArticle";

function News(){
    const [querriedNews, setQuerriedNews] = useState([]);
    const [leastPopular, setLeastPopular] = useState(null);
    const [mostPopular, setMostPopular] = useState(null);
    const [allInBetween, setAllInBetween] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsRes = await axios.get(`${API_URI}/news/`);
                setQuerriedNews(newsRes.data);
                console.log("Fetched News");
            } catch (err) {
                console.error("Error fetching data: within Matches.jsx", err);
            }
        };
        fetchNews();
    }, []);

    useEffect(() => {
        if(querriedNews.length === 0){return;}
        const setDupes = async () => {
            const sorted = [...querriedNews].sort((a,b) => b.views - a.views);
            setLeastPopular(sorted[sorted.length-1]);
            setMostPopular(sorted[0]);
            setAllInBetween(sorted.slice(1,sorted.length));
            setLoading(false);
        }
        setDupes();
    }, [querriedNews])

    const handleNewsClick = async (id) => {
        try {
            // We use backticks (``) to insert the id into the URL string
            const response = await axios.post(`${API_URI}/news/increase/${id}`);
            console.log("View count updated!", response.data);
            // You might want to update the local state here to show the new view count
        } catch (error) {
            console.error("Failed to increase views:", error);
        }
    };

    const newsOptions = [
        {headerText: "For You"},
        {headerText: "Latest"},
        {headerText: "Transfers"},
        {headerText: "Leagues"}
    ]

    return(
        loading ? (
            <LoadingPage text="Loading News" />
        ) : (
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
                        <a target="_blank" href={mostPopular.url} onClick={() => handleNewsClick(mostPopular._id)}><img src={`/assets/newsIcons/${mostPopular.pictureURL}.png`} alt="Most trending image header for article" className="news-content-popularity-image"/></a>
                        <div className="news-content-most-popular-footer">
                            <h4 className="news-content-most-popular-footer-text">{mostPopular.title}</h4>
                            <div className="news-content-most-popular-footer-citation">
                                <a target="_blank" href={mostPopular.newsCompany.url}><img src={`/assets/newsIcons/${mostPopular.newsCompany.pictureURL}.png`} alt="news citation image" className="news-content-most-popular-footer-citation-image"/></a>
                                <h6 className="news-content-most-popular-footer-citation-text">{mostPopular.newsCompany.name} - {timeAgo(mostPopular.DOP)}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="news-content-most-popular">
                        <div className="news-content-most-popular-header">
                            <div className="news-content-popularity-icon-container"><img src={PopularityDownIcon} alt="popularity icon" className="news-content-popularity-icon"/></div>
                            <h2 className="news-content-most-popular-header-text">Least Popular</h2>
                        </div>
                        <a target="_blank" href={leastPopular.url} onClick={() => handleNewsClick(leastPopular._id)}><img src={`/assets/newsIcons/${leastPopular.pictureURL}.png`} alt="Most trending image header for article" className="news-content-popularity-image"/></a>
                        <div className="news-content-most-popular-footer">
                            <h4 className="news-content-most-popular-footer-text">{leastPopular.title}</h4>
                            <div className="news-content-most-popular-footer-citation">
                                <a target="_blank" href={leastPopular.newsCompany.url}><img src={`/assets/newsIcons/${leastPopular.newsCompany.pictureURL}.png`} alt="news citation image" className="news-content-most-popular-footer-citation-image"/></a>
                                <h6 className="news-content-most-popular-footer-citation-text">{leastPopular.newsCompany.name} - {timeAgo(leastPopular.DOP)}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="news-articles-list">
                        {allInBetween.map((newsArticle, index) => (
                            <NewsArticle key={newsArticle._id || index} newsArticle={newsArticle} onClickFunc={handleNewsClick}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default News;