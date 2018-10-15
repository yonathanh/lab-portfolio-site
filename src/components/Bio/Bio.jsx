import React, { Component } from "react";

class Bio extends Component {
  state = {};
  render() {
    return (
      <video
        className="video"
        loop="loop"
        muted=""
        autoplay="autoplay"
        playsinline="playsinline"
        source
        src="imgs/Background-Animation.mp4"
        type="video/mp4"
      />
    );
  }
}

export default Bio;
