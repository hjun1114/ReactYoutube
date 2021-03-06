import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoClick = props.onVideoClick;
  const imgURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={()=> onVideoClick(video)} className = "list-group-item">
      <div className = "video-list media">

        <div className = "media-left">
          <img src={imgURL} className = "media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
