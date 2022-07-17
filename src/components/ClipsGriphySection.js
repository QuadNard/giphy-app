import React, { useEffect, useState } from 'react'
import "../styles/ClipsGiphySection.css";
import giphyIconDark from "../images/giphyIconDark.png";


const ClipsGriphySection = ({ giphysArray }) => {
    const [giphys, setGiphys] = useState([])


    const randomizeData = (giphysArray) => {
        return giphysArray.sort(() => Math.random() - 0.5);
    };


    useEffect(() => {
        let randomData = randomizeData(giphysArray)
        setGiphys(randomData.slice(0, 3));
    }, [giphysArray]);


    return (
        <div className="clips-grid">
            {giphys && giphys.length ? (
                <>
                    <div className="first-column">
                        <img src={giphys?.[0]?.images.downsized.url} />
                        <div className="text">
                            <img src={giphyIconDark} alt="IconDark" />
                            <p>{giphys?.[0].title}</p>
                        </div>
                    </div>
                    <div className="second-column">
                        <img src={giphys?.[1]?.images.downsized.url} />
                        <div className="text">
                            <img src={giphyIconDark} alt="IconDark" />
                            <p>{giphys?.[1].title}</p>
                        </div>
                        <img src={giphys?.[2]?.images.downsized.url} />
                        <div className="text">
                            <img src={giphyIconDark} alt="IconDark" />
                            <p>{giphys?.[2].title}</p>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default ClipsGriphySection;