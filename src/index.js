import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
