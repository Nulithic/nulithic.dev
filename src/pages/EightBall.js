import React, { useState } from "react";
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

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const EightBall = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState("");

  const randomGen = () => {
    return Math.floor(Math.random() * answers.length);
  };

  const handleShake = () => {
    setAnswer(answers[randomGen()]);
  };

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
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleShake}
                  fullWidth
                >
                  Shake
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>{answer}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default EightBall;
