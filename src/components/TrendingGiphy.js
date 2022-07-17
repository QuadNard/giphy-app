import React from 'react'
import "../styles/TrendingGiphy.css";

const TrendingGiphy = ({ giphy }) => {
    return (
        <div className="trending-giphy" key={giphy.id}>
            <img src={giphy.images.downsized.url} alt={giphy.title} />
        </div>
    );
};

export default TrendingGiphy;