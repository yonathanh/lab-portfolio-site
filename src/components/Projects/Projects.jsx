import React, { Component } from "react";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row h-50">
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
              <a
                href="https://yonathanh.github.io/Grenade-Launcher-game/starter_code/index.html"
                target="_blank"
              >
                Click
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
              <a href="http://www.iliveinamovie.com" target="_blank">
                Click
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
              <a
                href="http://estate-rental-manager.herokuapp.com"
                target="_blank"
              >
                Click
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
