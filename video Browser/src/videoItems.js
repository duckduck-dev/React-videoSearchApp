import React from 'react';
import './videoItem.css';

const VideoItems = ({video, selectedVideo}) => {

        return(
            <div  onClick={()=> selectedVideo(video)} className="video-item item">
            <img   className="ui image" src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title} />
            <div className="clr content">
                <div className="wd header" style={{color : 'grey'}}>{video.snippet.title} </div>
            </div>
            </div>);
};

export default VideoItems;