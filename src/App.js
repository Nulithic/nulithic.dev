import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import APITest from "./pages/APITest";
import EightBall from "./pages/EightBall";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/APITest" component={APITest} />
          <Route path="/EightBall" component={EightBall} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
