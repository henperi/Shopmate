import React, { useState } from 'react';
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

import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import Text from '../Text/Text';
import CustomButton from '../Buttons/CustomButtons';
import LinkRouter from '../LinkRouter/LinkRouter';
import { loginCustomer } from '../../reduxStore/modules/auth/actions';

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
    // display: 'initial',
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
    justifyContent: 'space-between',
    padding: theme.spacing(4),
  },
}));

const Signin = (props) => {
  const classes = useStyles(props);
  const { isOpen, handleClose, handleHaveAnAccount } = props;

  const dispatch = useDispatch();
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    setSigninData({
      ...signinData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = () => {
    const { email, password } = signinData;

    if (email && password) {
      return dispatch(loginCustomer(email, password));
    }
    return alert('All fields are required');
  };

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
            <Text classnames={['h2']}>Sign In</Text>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              type="email"
              margin="dense"
              variant="outlined"
              fullWidth
              autoComplete="email"
              label="Email"
              placeholder="Email"
              className={clsx(classes.textField, classes.centralize)}
              onChange={event => handleOnChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              type="password"
              margin="dense"
              variant="outlined"
              fullWidth
              autoComplete="password"
              label="Password"
              placeholder="Password"
              className={clsx(classes.textField, classes.centralize)}
              onChange={event => handleOnChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              chubby
              color="primary"
              variant="contained"
              aria-label="Add"
              size="large"
              onClick={() => handleSignin()}
            >
              Sign In
            </CustomButton>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions classes={{ root: classes.footer }}>
        <CustomButton
          color="default"
          style={{ color: '#F62F5E', backgroundColor: 'white' }}
          variant="contained"
          aria-label="Add"
          size="large"
          chubby
          onClick={handleClose}
        >
          Back To Shop
        </CustomButton>
        <LinkRouter to="" onClick={handleClose}>
          <CustomButton
            color="primary"
            variant="contained"
            aria-label="Add"
            size="large"
            chubby
            onClick={handleHaveAnAccount}
          >
            Checkout
          </CustomButton>
        </LinkRouter>
      </DialogActions>
    </Dialog>
  );
};

Signin.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleHaveAnAccount: PropTypes.func.isRequired,
};

Signin.defaultProps = {
  isOpen: false,
};

export default Signin;
