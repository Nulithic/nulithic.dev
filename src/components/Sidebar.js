import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const components = ["Home", "APITest"];

const useStyles = makeStyles(() => ({
  listMenu: {
    width: 250,
  },
}));

const Sidebar = (props) => {
  const { showSidebar, toggleDrawer } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer anchor={"left"} open={showSidebar} onClose={toggleDrawer}>
      <div className={classes.listMenu} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {components.map((text, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                if (text === "Home") {
                  history.push("/");
                } else history.push(`/${text}`);
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
