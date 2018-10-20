import React, { Component } from "react";

// import "./ContactInfo.css";

class ContactInfo extends Component {
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

        <div
          id="mouseposition-extension-element-full-container"
          //style="position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; pointer-events: none; z-index: 2147483647; font-weight: 400;"
        >
          <div
            id="mouseposition-extension-element-rect-display"
            // style="display: none; position: absolute; background: rgba(255, 255, 255, 0.7); outline: black solid 1px; font-size: 12px; z-index: 2147483647; justify-content: center; align-items: center; user-select: none; cursor: default; color: rgb(0, 0, 0); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; width: 0px; height: 0px;"
          >
            <pre //style="flex: 1 1 0%; text-align: center; background-color: rgba(255, 255, 255, 0.7); color: rgb(0, 0, 0); min-width: 42px; min-height: 12px; transition: all 1s ease 0s;"
            />
          </div>
          <pre
            id="mouseposition-extension-element-coordinate-display"
            // style="position: absolute; display: none; background: rgb(255, 255, 255); font-size: 12px; line-height: 14px; border-radius: 3px; border-width: 1px; border-color: rgb(34, 34, 34) black rgb(51, 51, 51); border-style: solid; padding: 3px; z-index: 2147483647; color: rgb(34, 34, 34); user-select: none; cursor: default; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"
          />
        </div>
      </div>
    );
  }
}

export default ContactInfo;