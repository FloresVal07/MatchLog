import "./Following.css";

function Following(){
    const newsOptions = [
        {headerText: "Teams"},
        {headerText: "Players"}
    ]
    return(
        <div className="following-header">
            <div>
                <h1 className="following-header-title">Following</h1>
                <div className="following-header-scroll-container">
                    {newsOptions.map((option, index) => (
                        <button>{option.headerText}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Following;