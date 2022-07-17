import React from 'react'
import giphyLogo from "../images/giphyLogo.png";
import "../styles/Header.css";
import avater from "../images/avater.png";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { KeyboardArrowDown } from '@mui/icons-material';

export const Header = () => {
    return (
        <div className="header">
            <img src={giphyLogo} alt="logo" />
            <div className="menu">
                <div className="button-wrapper reactions">
                    <div className="menu-button hover-reactions">
                        <h2>Reactions</h2>
                    </div>
                </div>
                <div className="button-wrapper enterainment">
                    <div className="menu-button hover-enterainment">
                        <h2>Enterainment</h2>
                    </div>
                </div>
                <div className="button-wrapper sports">
                    <div className="menu-button hover-sports">
                        <h2>Sports</h2>
                    </div>
                </div>
            </div>
            <div className="button-wrapper stickers">
                <div className="menu-button hover-stickers">
                    <h2>Stickers</h2>
                </div>
            </div>
            <div className="button-wrapper artists ">
                <div className="menu-button hover-artists">
                    <h2>Artists</h2>
                </div>
            </div>
            <div className="button-wrapper moreverticons">
                <div className="menu-button hover-moreverticons">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="button">
                <h2>Upload</h2>
            </div>
            <div className="button">
                <h2>Create</h2>
            </div>
            <div className="profile">
                <img src={avater} alt="avater" />
                <h2>QuadNard</h2>
                <KeyboardArrowDown />
            </div>
        </div>
    )
}
export default Header;

