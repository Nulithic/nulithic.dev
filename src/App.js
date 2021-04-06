import React from "react";
import { Grommet, ResponsiveContext } from "grommet";

import Home from "./components/home.component";

const theme = {
  global: {
    colors: {
      brand: "#282c34",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>{(size) => <Home size={size} />}</ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
