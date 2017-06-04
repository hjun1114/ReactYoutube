import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {

  const videoItems = props.videos1.map((video)=> {
    return <VideoListItem key={video.etag} video = {video} />
  });
  // very similar to foreach, difference is that it spits out an array.
  // this mapped array would result in [<li>Video<li>,...]

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
// in functional component, props is sn argument in the function and you can access it by calling props.something.
export default VideoList;
