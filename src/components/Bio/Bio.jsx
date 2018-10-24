import React, { Component } from "react";

import "./Bio.css";

class Bio extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        {/* <video
          className="video"
          loop="loop"
          muted=""
          autoplay="autoplay"
          playsinline="playsinline"
          source
          src="imgs/Background-Animation.mp4"
          type="video/mp4"
        /> */}

        <div class="about-info">
          <div id="contact">
            <h3 class="text-secondary">BIO</h3>
            <p>
              I identify myself as a problem solver and creator who seeks the
              opportunity to use any resources or tools to build effective
              business solution. My objective is to utilize my skills and
              knowledge to create websites and applications that will be enjoyed
              by thousands of users. I’m looking forward to being part of
              talented team that I can contribute to and grow with
              professionally.
            </p>
          </div>

          <div id="contact">
            <h3>ironhack</h3>
            <h6>Teaching Assistant</h6>
            <p>
              Assist with classroom instruction and provide support and guidance
              to students. Implement a classroom system to track student
              progress, and take steps to ensure academic progress is where it
              should be. Work closely with the lead teacher to identify issues
              and develop appropriate solutions.
            </p>
          </div>

          <div id="contact">
            <h3>Ritz Carlton </h3>
            <h6>Executive Sous-Chef</h6>
            <p>
              Guarantee high quality, timely and budgetary products. Analyze
              inventory and budget data to forecast and identifies trends.
              Oversees quality control for ingredients, finished product and
              facilities.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
