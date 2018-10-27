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

        <div className="about-info">
          <div id="contact">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I identify myself as a problem solver and creator who seeks the
              opportunity to use any resources or tools to build effective
              business solution. My objective is to utilize my skills and
              knowledge to create websites and applications that will be enjoyed
              by thousands of users. I’m looking forward to being part of
              talented team that I can contribute to and grow with
              professionally.
            </p>
            <br />
            <p>
              Specialties: JavaScript, React.js, Express.js, Node.js​, ​MongoDB,
              Mongoose, HTML/CSS3
            </p>
          </div>

          <div id="contact">
            <h1>Jonathan</h1>
            <p>
              I’m a Jr. Full-Stack Web Developer and experienced Sr. Technical
              Engineer. I have experience with multiple responsibilities and
              have brought projects to successful conclusions in a variety of
              adverse conditions. Responsibilities include demonstrating and
              executing unique technology (proof of concept), managing the team,
              continuing with consultation and follow-up. I also have experience
              integrating various software and hardware technologies by using
              technical knowledge and programing skills.
            </p>
          </div>

          <div id="contact">
            <h1>Ironhack</h1>
            <p>Graduated among the top of the class</p>
            <p>
              Ironhack is an immersive bootcamp with locations in Madrid,
              Barcelona, and Miami, offering courses in Full Stack Web
              Development. (400+ hours) - Technologies: JavaScript(ES6), MERN
              Full Stack Node.JS, Express, React, MongoDB. * Good development
              practices: Focus on clean code principles, design patterns and
              test driven development (TDD). Aug 2018 - Oct 2018
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
