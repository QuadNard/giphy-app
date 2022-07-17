import React from "react";
import "./ClipsGriphySection";

const ArtistGriphy = ({ giphy }) => {
    return (
        <div className="artist-giphy">
            <img src={giphy.images.downsized.url} alt={giphy.title} />
        </div>
    )
};

export default ArtistGriphy;