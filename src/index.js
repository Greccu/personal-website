import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { HashRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);

// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
