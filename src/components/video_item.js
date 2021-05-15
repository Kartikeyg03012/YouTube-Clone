import React from 'react';

const VideoListItem = ({ video, onVedioSelect }) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVedioSelect(video)} className="list-group-item">
            <div className="vedio-list-media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;