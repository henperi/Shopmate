import React from 'react';
import PropTypes from 'prop-types';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {
  makeStyles,
  DialogContent,
  IconButton,
  Grid,
  TextField,
  DialogActions,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import clsx from 'clsx';
import Text from '../Text/Text';
import CustomButton from '../Buttons/CustomButtons';

const useStyles = makeStyles(theme => ({
  content: { padding: theme.spacing(1, 4) },
  title: {
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  scrollPaper: {
    position: 'relative',
    top: theme.spacing(3),
  },
  centralize: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  textField: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignText: 'center',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  footer: {
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const { isOpen, handleClose, handleAlreadyMember } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      classes={{ scrollPaper: classes.scrollPaper }}
    >
      <DialogTitle>
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={clsx(classes.content, classes.centralize)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text classnames={['h2']}>Sign Up</Text>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              className={clsx(classes.textField, classes.centralize)}
              margin="dense"
              variant="outlined"
              fullWidth
              type="email"
              autoComplete="email"
              label="Email"
              placeholder="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              className={clsx(classes.textField, classes.centralize)}
              margin="dense"
              variant="outlined"
              fullWidth
              type="password"
              autoComplete="password"
              label="Password"
              placeholder="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="repeat-password"
              className={clsx(classes.textField, classes.centralize)}
              margin="dense"
              variant="outlined"
              fullWidth
              type="password"
              autoComplete="off"
              label="Re-type password"
              placeholder="Re-type password"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton color="primary" variant="contained" aria-label="Add" size="large" chubby>
              Sign Up
            </CustomButton>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions classes={{ root: classes.footer }}>
        Already a member?
        <CustomButton
          color="primary"
          variant="contained"
          aria-label="Add"
          size="large"
          chubby
          onClick={handleAlreadyMember}
        >
          Signin
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

Signup.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleAlreadyMember: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  isOpen: false,
};

export default Signup;
