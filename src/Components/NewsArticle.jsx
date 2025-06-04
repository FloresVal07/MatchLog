import "./NewsArticle.css";

function NewsArticle({imgSrc, articleHeadline, articleCitationSrc, articleCitationName, articleCitationHours}){
    return(
        <div className="news-content-article">
            <img src={imgSrc} alt="Man City headline" className="news-content-article-image" loading="lazy"/>
           <div className="news-content-article-words">
                <h4 className="news-content-most-popular-footer-text">{articleHeadline}</h4>
                <div className="news-content-most-popular-footer-citation">
                    <img src={articleCitationSrc} alt="news citation image" className="news-content-most-popular-footer-citation-image" loading="lazy"/>
                    <h6 className="news-content-most-popular-footer-citation-text">{articleCitationName} - {articleCitationHours} hour{articleCitationHours > 1 ? "s" : ""} ago</h6>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle;