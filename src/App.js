import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import APITest from "./pages/APITest";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/APITest" component={APITest} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
