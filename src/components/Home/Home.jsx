import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div class="fb-profile">
          <img
            align="left"
            class="fb-image-lg"
            src="https://www.3d-wallpapers.info/wp-content/uploads/Dreadful-Dragon-3d-HD-Wallpaper.jpg"
            alt="Background"
          />
          <img
            align="left"
            class="fb-image-profile thumbnail"
            src="https://avatars0.githubusercontent.com/u/25887322?s=460&v=4"
            alt="Profile image"
          />
          <div class="fb-profile-text">
            <h1>Jonathan Harris</h1>
            <p>Best Web Developer in The world</p>
          </div>
        </div>

        <aside class="profile-card">
          <img
            className="img-responsive img-thumbnail"
            src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
            alt="bounce"
          />
        </aside>
      </div>
    );
  }
}

export default Home;
