import React, { useState } from "react";
import { CssBaseline, Grid, Toolbar } from "@material-ui/core";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const [theme, setTheme] = useState(false);
  const [showSidebar, setShowSideBar] = useState(false);

  const appliedTheme = createMuiTheme({
    palette: {
      type: theme ? "light" : "dark",
      primary: {
        main: theme ? "#212121" : "#ffffff",
      },
      secondary: {
        main: theme ? "#b71c1c" : "#d50000",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 20,
        },
      },
    },
  });

  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setShowSideBar(!showSidebar);
  };

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar theme={theme} setTheme={setTheme} toggleDrawer={toggleDrawer} />
        <Sidebar showSidebar={showSidebar} toggleDrawer={toggleDrawer} />
        <Toolbar />
        <Grid container justify="center" alignItems="center">
          {children}
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default Layout;
