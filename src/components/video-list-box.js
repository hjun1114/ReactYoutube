import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return <VideoListItem key={video.etag} video = {video} />
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
// in functional component, props is argument in the function and you can access it by calling props.something.
export default VideoList;