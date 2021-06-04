import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, useScrollTrigger, Slide } from "@material-ui/core";
import { Menu, Brightness4, Brightness7 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HideNav = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = (props) => {
  const { theme, setTheme, toggleDrawer } = props;
  const classes = useStyles();

  const iconTheme = !theme ? <Brightness4 /> : <Brightness7 />;

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage["theme"] = theme;
    } else {
      setTheme(JSON.parse(localStorage["theme"]));
    }
  }, [setTheme, theme]);

  return (
    <HideNav {...props}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={(event) => toggleDrawer(event)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Nulithic
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setTheme(!theme);
              localStorage["theme"] = !theme;
            }}
          >
            {iconTheme}
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideNav>
  );
};

export default Navbar;
