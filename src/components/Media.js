import React from 'react'
import "../styles/Media.css";
import trending from "../images/trending.svg";
import artist from "../images/artist.svg";
import clip from "../images/clip.svg";
import stories from "../images/stories.svg";



const Media = () => {
    return (
        <div className="media">
            <div className="row">
                <div className="row-header">
                    <img src={trending} alt="trending" />
                    <h1>Trending</h1>
                </div>
                <div className="trending-container">
                    <p>Content</p>
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={artist} alt="artist" />
                    <h1>Artists</h1>
                </div>
                <div className="artist-container">
                    <p>Content</p>
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={clip} alt="clip" />
                    <h1>Clips</h1>
                </div>
                <div className="clip-container">
                    <p>Context</p>
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={stories} alt="stories" />
                    <h1>Stories</h1>
                </div>
                <div className="stories-container">
                    <p>Content</p>
                </div>
            </div>






        </div>
    )
}

export default Media
