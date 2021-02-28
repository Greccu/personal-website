import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/index";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={ProjectsPage} />
    </>
  );
}

export default App;

/* <Router>

<Switch>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/projects">
    <ProjectsPage />
  </Route>
</Switch>
</Router> */
