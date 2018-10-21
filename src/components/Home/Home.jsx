import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div class="fb-profile">
          <img
            align="left"
            class="fb-image-lg"
            src="/imgs/code-background.jpg"
            alt="Background"
          />

          <img
            align="left"
            class="fb-image-profile thumbnail"
            src="https://avatars0.githubusercontent.com/u/25887322?s=460&v=4"
            alt="Profile image"
          />
          <div class="fb-profile-text">
            <div className="main-wrap">
              <img
                className="main-gif"
                src="/imgs/linKing.png"
                alt="main-gif"
              />
              <h1 className="main-header">Jonathan Harris</h1>
            </div>
            <p>Best Web Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
