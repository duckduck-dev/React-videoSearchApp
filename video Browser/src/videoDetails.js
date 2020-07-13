import React from 'react';
import './videoItem.css';

const VideoDetails = ({video}) => {
            
            if(!video){
                    return 'Loading';
            }

            const videoSrc =  `https://www.youtube.com/embed/${video.id.videoId}`;

            return (
                    <div>
                    <div className="ui embed">
                        <iframe title="videoBrowser" src={videoSrc} />
                    </div>
                        <div className=" ui segment" style={{backgroundColor : '#808080', color: '333339'}}>
                            <h4 className="ui header">{video.snippet.title}</h4>
                            <p>{video.snippet.description}</p>
                            </div>
                    </div>
            );


};

export default VideoDetails;