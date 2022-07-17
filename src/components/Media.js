import React, { useEffect, useState } from 'react'
import { fetchSearchedGiphys, fetchTrendingGiphys } from "../api/giphyApi";
import "../styles/Media.css";
import trends from "../images/trends.svg";
import artist from "../images/artist.svg";
import clip from "../images/clip.svg";
import story from "../images/story.svg";
import TrendingGiphy from './TrendingGiphy';
import giphyArtists from './artists';
import ArtistGiphy from './ArtistGriphy';
import ClipsGiphySection from './ClipsGriphySection';
import StoriesGiphySection from './StoriesGiphySection';


const Media = () => {


    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);
    const [stories, setStories] = useState([]);

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    };

    const getTrendingGiphys = async () => {
        // I get the giphys by doing an API call
        const trending = await fetchTrendingGiphys();
        // I set the trending giphys
        setTrending(randomizeData(trending.data));
    };

    const getArtists = async () => {
        const artists = await Promise.all(
            giphyArtists.map(async (giphyArtist) => {
                return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
            })
        );
        setArtists(artists.flat());
    };

    const getSearchedGiphys = async (query, setState) => {
        const searched = await fetchSearchedGiphys(query);
        setState(randomizeData(searched.data));
    }


    useEffect(() => {
        getTrendingGiphys();
        getArtists();
        getSearchedGiphys("coffee", setClips);
        getSearchedGiphys("pose", setStories);
    }, []);


    return (
        <div className="media">
            <div className="row">
                <div className="row-header">
                    <img src={trends} alt="trends" />
                    <h1>Trending</h1>
                </div>
                <div className="trending-container">
                    {trending?.map((trendingGiphy, index) => {
                        return <TrendingGiphy giphy={trendingGiphy} key={index} />
                    })}
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={artist} alt="artist" />
                    <h1>Artists</h1>
                </div>
                <div className="artist-container">
                    {artists.map((artistGiphys, index) => {
                        return <ArtistGiphy giphy={artistGiphys} key={index} />
                    })}
                    <p>Context</p>
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={clip} alt="clip" />
                    <h1>Clips</h1>
                </div>
                <div className="clip-container">
                    <ClipsGiphySection giphysArray={clips} />
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src={story} alt="story" />
                    <h1>Stories</h1>
                </div>
                <div className="stories-container">
                    <StoriesGiphySection giphysArray={stories} />
                </div>
            </div>
        </div>
    );
};

export default Media
