import React, { Component } from "react";

// import "./ContactInfo.css";

class ContactInfo extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <main id="contact">
          <h1 className="lg-heading">Contact Me</h1>
          <h2 Naa="sm-heading">This is how you can reach me...</h2>
          <div Naa="boxes">
            <div>
              <span className="text-secondary">Email: </span>{" "}
              yochananh@gmail.com
            </div>
            <div>
              <span className="text-secondary">Phone: </span> (917) 704-6854
            </div>
            <div>
              <span className="text-secondary">Address: </span> South Florida.
            </div>
            <a
              href="https://github.com/yonathanh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/yonatan-harris"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </main>

        <footer id="main-footer" />
      </div>
    );
  }
}

export default ContactInfo;
