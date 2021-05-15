import React from 'react';
import VideoListItem from './video_item';
const VideoList = (props) => {
    const vedioItems = props.vedios.map((videos) => {
        return (
            <VideoListItem
                onVedioSelect={props.onVedioSelect}
                key={videos.etag}
                video={videos} />
        );
    });


    return (
        <ul className="col-md-4 list-group">
            {vedioItems}
        </ul>
    );
};

export default VideoList;