import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    textAlign: "center",
  },
  paper: {
    padding: 15,
  },
}));

const EightBall = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
        <Grid item xs={12}>
          <Typography variant="h3">Eight Ball</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Button variant="contained" color="secondary" style={{ whiteSpace: "nowrap" }} onClick={""} fullWidth>
                  Spin
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default EightBall;
