import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography>Just figuring out life...</Typography>
      </Grid>
    </div>
  );
};

export default Home;
