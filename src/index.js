import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "jquery";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
registerServiceWorker();
