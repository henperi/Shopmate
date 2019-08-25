import React from 'react';
import PropTypes, { array } from 'prop-types';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {
  makeStyles,
  DialogContent,
  IconButton,
  Grid,
  Divider,
  Hidden,
  DialogActions,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import clsx from 'clsx';
import Text from '../Text/Text';
import CartItem from './CartItem';
import CustomButton from '../Buttons/CustomButtons';
import LinkRouter from '../LinkRouter/LinkRouter';

const useStyles = makeStyles(theme => ({
  content: { padding: theme.spacing(3, 10) },
  flexContainer: {
    display: 'flex',
  },
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
    display: 'initial',
    top: theme.spacing(3),
  },
  imgTitle: {
    display: 'flex',
  },
  centralize: {
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      // textAlign: 'initial',
    },
  },
  inputField: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    width: '60px',
    borderRadius: theme.spacing(3),
    fontWeight: '500',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  footer: {
    justifyContent: 'space-between',
    padding: theme.spacing(3, 10),
    backgroundColor: theme.palette.grey[200],
  },
}));

const Cart = (props) => {
  const classes = useStyles();
  const { isOpen, handleClose, cartItems } = props;
  // const [scroll, setScroll] = React.useState('paper');

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="xl"
      scroll="paper"
      classes={{ scrollPaper: classes.scrollPaper }}
    >
      <DialogTitle>
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Text classnames={['h2']}>
                {cartItems.length}
                <span> Items In Your Cart</span>
              </Text>
            </Grid>
            <Hidden smDown>
              <Grid item lg={6}>
                <Text classnames={['body1']} weight={400}>
                  Item
                </Text>
              </Grid>
              <Grid item lg={1} className={clsx(classes.centralize)}>
                <Text classnames={['body1']} weight={400}>
                  Size
                </Text>
              </Grid>
              <Grid item lg={3} className={clsx(classes.centralize)}>
                <div className={clsx(classes.flexContainer, classes.centralize)}>
                  <Text classnames={['body1']} weight={400}>
                    Quantity
                  </Text>
                </div>
              </Grid>
              <Grid item lg={2} className={clsx(classes.centralize)}>
                <Text classnames={['body1']} weight={400}>
                  Price
                </Text>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Divider />

        {cartItems.length > 0 && cartItems.map(item => <CartItem key={item.tem_id} item={item} />)}
      </DialogContent>
      <DialogActions classes={{ root: classes.footer }}>
        <CustomButton
          color="default"
          style={{ color: '#F62F5E', backgroundColor: 'white' }}
          variant="contained"
          aria-label="Add"
          size="large"
          chubby
        >
          Back To Shop
        </CustomButton>
        <LinkRouter to="/checkout" onClick={handleClose}>
          <CustomButton color="primary" variant="contained" aria-label="Add" size="large" chubby>
            Checkout
          </CustomButton>
        </LinkRouter>
      </DialogActions>
    </Dialog>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  cartItems: PropTypes.objectOf(array),
};

Cart.defaultProps = {
  isOpen: false,
  cartItems: [],
};

export default Cart;
