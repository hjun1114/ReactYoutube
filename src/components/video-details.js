import React from 'react';

const VideoDetail = (props) => {
  const video = props.video;
  if (!video) {
    return (
      <div>Loading...</div>
    );
  }
  //handling null props 
  //when the app is first renedered, the constructor method runs which sets the list of videos to an empty array.
  //and the render method is almost immediately run, passing empty arrat in the state.
  const videoID = video.id.videoId;
  const videoURL = 'https://www.youtube.com/embed/' + videoID;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}>
        </iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
