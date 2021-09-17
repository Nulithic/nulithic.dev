import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import APITest from "./projects/APITest";
import EightBall from "./projects/EightBall";
import Clock from "./projects/Clock";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route exact path="/Projects" component={Projects} />
          <Route path="/Projects/APITest" component={APITest} />
          <Route path="/projects/EightBall" component={EightBall} />
          <Route path="/projects/Clock" component={Clock} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
