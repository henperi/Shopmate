import React from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    padding: theme.spacing(4, 0),
  },
}));

const Delivery = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.form}>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-name"
          label="Nickname"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Delivery;
