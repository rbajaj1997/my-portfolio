import React, { Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Suspense fallback={<div className="loader"></div>}>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
