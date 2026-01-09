import "./NewsArticle.css";
import { timeAgo } from "../Components/utils.js";

function NewsArticle({newsArticle, onClickFunc}){
    return(
        <div className="news-content-article">
            <a 
                target="_blank" 
                href={newsArticle.url} 
                style={{ display: 'block', flex: '0 0 30%' }} // Forces the link to behave
                onClick={() => onClickFunc(newsArticle._id)}
            >
                <img 
                    src={`/assets/newsIcons/${newsArticle.pictureURL}.png`} 
                    className="news-content-article-image" 
                    alt="headline"
                />
            </a>
            <div className="news-content-article-words">
                <h4 className="news-content-most-popular-footer-text">{newsArticle.title}</h4>
                <div className="news-content-most-popular-footer-citation">
                    <a target="_blank" href={newsArticle.newsCompany.url}><img src={`/assets/newsIcons/${newsArticle.newsCompany.pictureURL}.png`} alt="news citation image" className="news-content-most-popular-footer-citation-image" loading="lazy"/></a>
                    <h6 className="news-content-most-popular-footer-citation-text">{newsArticle.newsCompany.name} - {timeAgo(newsArticle.DOP)}</h6>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle;