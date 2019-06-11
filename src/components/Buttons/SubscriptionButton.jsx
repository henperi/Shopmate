import React from 'react';
import {
  makeStyles, Paper, Button, IconButton,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  chubby: {
    borderRadius: theme.spacing(5),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    borderRadius: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  iconButton: {
    padding: 10,
  },
}));

const SubscriptionButton = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.inputField} component="span">
      <IconButton aria-label="Menu">
        <EmailIcon />
      </IconButton>
      <InputBase
        type="email"
        fullWidth
        placeholder="Enter your email address"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={`${classes.chubby} ${classes.chubby}`}
      >
        Subscribe
      </Button>
    </Paper>
  );
};

export default SubscriptionButton;
