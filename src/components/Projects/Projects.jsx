import React, { Component } from "react";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <a
          className="btn btn-outline-danger btn-sm my-4"
          href="https://yonathanh.github.io/COCONUNS-webpage/COCONUNS-webpage/index.html?fbclid=IwAR3QSUUi8LDYAn4WtsU7yeMxATJfYWkARslGgZaQhbMUR6GlrfAHDX9kb_w"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hackothon Project
        </a>
        <div className="row h-50">
          <div className="col-md-4">
            <img
              className="project"
              src="/imgs/perfect-shot.png"
              alt="project"
            />
          </div>
          <div className="col-md-4">
            <img
              className="project"
              src="/imgs/ilivinamovie.png"
              alt="project"
            />
          </div>
          <div className="col-md-4">
            <img
              className="project"
              src="/imgs/estate-manager.png"
              alt="project"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img"
                src="/imgs/perfect-shot.png"
                alt="bounce"
              />
              <i className="fas fa-eye" />
              <a
                href="https://yonathanh.github.io/Grenade-Launcher-game/starter_code/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
              <br />
              <i className="fab fa-github" />
              <a
                href="https://github.com/yonathanh/Grenade-Launcher-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img"
                src="/imgs/ilivinamovie.png"
                alt="bounce"
              />
              <i className="fas fa-eye" />
              <a
                href="http://www.iliveinamovie.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
              <br />
              <i className="fab fa-github" />
              <a
                href="https://github.com/yonathanh/movies-is-my-life"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img"
                src="/imgs/estate-manager.png"
                alt="bounce"
              />
              <i className="fas fa-eye" />
              <a
                href="http://estate-rental-manager.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
              <br />
              <i className="fab fa-github" />
              <a
                href="https://github.com/yonathanh/estate-rental-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
