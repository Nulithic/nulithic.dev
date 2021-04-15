import React, { useState } from "react";
import { Grommet, ResponsiveContext, Box, Button, Heading, Layer, Grid, Card, CardBody, Text } from "grommet";
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

const AppMenu = (props) => {
  console.log(props.size, window.innerWidth);

  const arrComp = ["component", "component", "component", "component", "component", "component", "component", "component", "component", "component", "component", "component"];

  const arrGen = (val) => {
    let arr = [];
    for (let i = 0; i < val; i++) {
      arr.push("auto");
    }
    return arr;
  };

  const colGen = () => {
    let calColumns = arrComp.length * 192;

    if (props.size === "small") {
      return arrGen(1);
    } else if (props.size === "medium") {
      return arrGen(3);
    } else if (props.size === "large") {
      return arrGen(9);
    }
  };

  console.log(colGen());

  return (
    <Layer full>
      <Box tag="header" direction="row" align="center" justify="end" pad={{ left: "medium", right: "small", vertical: "small" }}>
        <Button icon={<Close />} onClick={() => props.setShow(!props.show)} />
      </Box>
      <Box overflow="auto">
        <Grid pad="small" rows={["auto"]} columns={colGen()} gap="small" justify="center">
          {arrComp.map((value, i) => (
            <Box key={i}>
              <Card align="center" justify="center" height="small" width="small" background="light-1">
                <CardBody
                  fill
                  justify="center"
                  align="center"
                  pad="medium"
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  <Text>APITest</Text>
                </CardBody>
              </Card>
            </Box>
          ))}
        </Grid>
      </Box>
    </Layer>
  );
};

const App = () => {
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <ResponsiveContext.Consumer>
        {(size) => (
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
              Home Screen
            </Box>
            {show && <AppMenu show={show} setShow={setShow} size={size} />}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
