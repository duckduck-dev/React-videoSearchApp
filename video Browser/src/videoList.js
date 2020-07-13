import React from 'react';
import VideoItems from './videoItems';

const VideoList = ({videos, selectedVideo}) => {
    const Items = videos.map(video => {
        return <VideoItems key={video.id.videoId} video={video}  selectedVideo={selectedVideo}/>
    });
    return(<div className="ui relaxed divided list">{Items}</div>);
}


export default VideoList;