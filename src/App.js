import React, { useState } from "react";
import { Grommet, ResponsiveContext, Box, Button, Heading, Layer } from "grommet";
import { Menu, Moon, Close } from "grommet-icons";

import APITest from "./components/apiTest.component";

const theme = {
  global: {
    colors: {
      brand: "#282c34",
      focus: "#00739D",
      "accent-1": "#00739D",
      background: {
        light: "#ffffff",
        dark: "#121212",
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    background={props.dark ? "#333" : "brand"}
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1", boxShadow: props.dark ? `0px 6px 8px rgb(0 0 0 / 100%)` : `0px 6px 8px rgb(0 0 0 / 50%)` }}
    {...props}
  />
);

const AppMenu = (props) => (
  <Layer full="true">
    <Box tag="header" direction="row" align="center" justify="end" pad={{ left: "medium", right: "small", vertical: "small" }}>
      <Button icon={<Close />} onClick={() => props.setShow(!props.show)} />
    </Box>
  </Layer>
);

const App = () => {
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <ResponsiveContext.Consumer>
        {() => (
          <Box fill>
            <AppBar dark={dark}>
              <Button
                icon={<Menu />}
                onClick={() => {
                  setShow(!show);
                }}
              />
              <Heading level="3" margin="none">
                Nulithic
              </Heading>
              <Button
                icon={<Moon />}
                onClick={() => {
                  setDark(!dark);
                }}
              />
            </AppBar>
            <Box flex direction="row" align="center" justify="center" overflow={{ horizontal: "hidden" }}>
              <APITest />
            </Box>
            {show && <AppMenu show={show} setShow={setShow} />}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
