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
            className="fb-image-profile thumbnail"
            src="/imgs/ProfilePicture2018.jpg"
            alt="Profile image"
          />
          <div className="fb-profile-text">
            <div className="main-wrap">
              <img
                className="main-gif"
                src="/imgs/linKing.png"
                alt="main-gif"
              />

              <h1 className="main-header">Jonathan Harris</h1>
            </div>
            <a href="https://github.com/yonathanh" target="_blank">
              <i className="fab fa-github fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/yonatan-harris"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
