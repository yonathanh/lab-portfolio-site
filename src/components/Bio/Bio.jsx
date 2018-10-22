import React, { Component } from "react";

import "./Bio.css";

class Bio extends Component {
  state = {};
  render() {
    return (
      <div className="main">
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

        <main id="contact">
          <h1 class="lg-heading">
            Contact
            <span class="text-secondary">Me</span>
          </h1>
          <h2 class="sm-heading">This is how you can reach me...</h2>
          <div class="boxes">
            <div>
              <span class="text-secondary">Email: </span> yochananh@gmail.com
            </div>
            <div>
              <span class="text-secondary">Phone: </span> (917) 704-6854
            </div>
            <div>
              <span class="text-secondary">Address: </span> Miami Fl.
            </div>
          </div>
        </main>

        <footer id="main-footer" />

        <div id="mouseposition-extension-element-full-container">
          <div id="mouseposition-extension-element-rect-display">
            <pre />
          </div>
          <pre id="mouseposition-extension-element-coordinate-display" />
        </div>
      </div>
    );
  }
}

export default Bio;
