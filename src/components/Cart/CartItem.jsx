import React from 'react';
import {
  makeStyles, Grid, Fab, InputBase, Paper, IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { useDispatch } from 'react-redux';

import Text from '../Text/Text';
import Thumbnail from '../Thumbnail/Thumbnail';
import { updateCart } from '../../reduxStore/modules/shoppinCart/actions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  closeButton: {
    color: theme.palette.primary.main,
  },
  flexContainer: {
    display: 'flex',
  },
  itemImage: {
    paddingRight: theme.spacing(2),
  },
  itemDetails: {
    flexGrow: 1,
    flexFlow: 'column',
    justifyContent: 'space-between',
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
}));

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdate = (updateType) => {
    let newQuantity = item.quantity;

    if (updateType === '+') {
      newQuantity = item.quantity + 1;
    }
    if (updateType === '-') {
      newQuantity = item.quantity - 1;
    }

    dispatch(updateCart(item.item_id, newQuantity));
  };

  const handleRemove = () => {
    dispatch(updateCart(item.item_id, 0));
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={6}>
        <div className={classes.flexContainer}>
          <div className={classes.itemImage}>
            <Thumbnail size="100px" image={item.image} />
          </div>
          <div className={classes.itemDetails}>
            <Text classnames={['h3']} weight={400}>
              {item.name}
            </Text>
            <Text classnames={['body1']} weight={400}>
              {item.item_id}
            </Text>
            <Text classnames={['body2']} weight={100}>
              <IconButton
                aria-label="Remove"
                size="small"
                className={classes.red}
                onClick={() => handleRemove()}
              >
                <CloseIcon className={classes.closeButton} />
              </IconButton>
              Remove
            </Text>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={1} className={clsx(classes.centralize)}>
        <Text classnames={['body1']} weight={400}>
          {item.attributes}
        </Text>
      </Grid>
      <Grid item xs={12} lg={3}>
        <div className={clsx(classes.flexContainer, classes.centralize)}>
          <Fab
            color="inherit"
            aria-label="Add"
            className={classes.button}
            onClick={() => handleUpdate('-')}
          >
            <Remove />
          </Fab>
          <Paper className={clsx(classes.inputField, classes.button)} component="span">
            <InputBase
              fullWidth
              disabled
              value={item.quantity}
              type="text"
              inputProps={{
                style: {
                  textAlign: 'center',
                },
              }}
            />
          </Paper>
          <Fab
            color="inherit"
            aria-label="Add"
            className={classes.button}
            onClick={() => handleUpdate('+')}
          >
            <AddIcon />
          </Fab>
        </div>
      </Grid>
      <Grid xs={12} item lg={2} className={clsx(classes.centralize)}>
        <Text classnames={['h3']} weight={400}>
          £
          {item.subtotal}
        </Text>
      </Grid>
    </Grid>
  );
};

export default CartItem;
