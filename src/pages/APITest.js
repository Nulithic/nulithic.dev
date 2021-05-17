import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  TextField,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import { getSimple, getFauna } from "../routes/getData";
import { postSimple, postFauna } from "../routes/postData";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 500,
  },
  paper: {
    padding: 15,
  },
  message: {
    [theme.breakpoints.down(499)]: {
      fontSize: "3.5vw",
    },
    [theme.breakpoints.between(500, 749)]: {
      fontSize: "2.5vw",
    },
    [theme.breakpoints.between(750, 1024)]: {
      fontSize: "1.5vw",
    },
  },
}));

const APITest = () => {
  const classes = useStyles();

  const [data, setData] = useState({ firstData: "", secondData: "", password: "" });
  const [message, setMessage] = useState([]);
  const [dialog, setDialog] = useState(false);

  const handleDialog = () => {
    setDialog(!dialog);
  };

  const postDialog = (
    <Dialog open={dialog} onClose={handleDialog}>
      <DialogTitle id="form-dialog-title">Password</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          type="password"
          fullWidth
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialog} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={async () => {
            handleDialog();
            setMessage(await postFauna(data));
          }}
          color="primary"
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
        <Grid item xs={12}>
          <Typography variant="h3">API Test</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="firstData"
                  variant="outlined"
                  value={data.firstData}
                  onChange={(e) => setData({ ...data, firstData: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="secondData"
                  variant="outlined"
                  value={data.secondData}
                  onChange={(e) => setData({ ...data, secondData: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={async () => setMessage(await getSimple())}
                  fullWidth
                >
                  Get Simple
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={async () => setMessage(await postSimple(data))}
                  fullWidth
                >
                  Post Simple
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={async () => setMessage(await getFauna())}
                  fullWidth
                >
                  Get Fauna
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleDialog}
                  fullWidth
                >
                  Post Fauna
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {postDialog}

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>{message.length}</Typography>
          </Paper>
        </Grid>

        {message.map((value, i) => {
          if (value.data) {
            return (
              <Grid key={i} item xs={12}>
                <Paper className={classes.paper}>
                  <Typography className={classes.message}>{value.data.firstData}</Typography>
                  <Typography className={classes.message}>{value.data.secondData}</Typography>
                </Paper>
              </Grid>
            );
          } else {
            return (
              <Grid key={i} item xs={12}>
                <Paper className={classes.paper}>
                  <Typography className={classes.message}>{value.firstData}</Typography>
                  <Typography className={classes.message}>{value.secondData}</Typography>
                </Paper>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default APITest;
