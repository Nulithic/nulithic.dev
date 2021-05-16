import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu, Brightness4, Brightness7 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
    <AppBar position="sticky">
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
  );
};

export default Navbar;
