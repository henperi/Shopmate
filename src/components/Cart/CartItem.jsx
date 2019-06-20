import React from 'react';
import {
  makeStyles, Grid, Fab, InputBase, Paper, IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import Text from '../Text/Text';
import Thumbnail from '../Thumbnail/Thumbnail';

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

const CartItem = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={6}>
        <div className={classes.flexContainer}>
          <div className={classes.itemImage}>
            <Thumbnail size="100px" />
          </div>
          <div className={classes.itemDetails}>
            <Text classnames={['h3']} weight={400}>
              Green T-shirt 2016 Green T-shirt 2016
            </Text>
            <Text classnames={['body1']} weight={400}>
              Men BK3569
            </Text>
            <Text classnames={['body2']} weight={100}>
              <IconButton
                aria-label="Remove"
                size="small"
                className={classes.red}
                onClick={() => {}}
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
          XXL
        </Text>
      </Grid>
      <Grid item xs={12} lg={3}>
        <div className={clsx(classes.flexContainer, classes.centralize)}>
          <Fab color="inherit" aria-label="Add" className={classes.button}>
            <Remove />
          </Fab>
          <Paper className={clsx(classes.inputField, classes.button)} component="span">
            <InputBase
              fullWidth
              defaultValue="2"
              type="text"
              inputProps={{
                style: {
                  textAlign: 'center',
                },
              }}
            />
          </Paper>
          <Fab color="inherit" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Fab>
        </div>
      </Grid>
      <Grid xs={12} item lg={2} className={clsx(classes.centralize)}>
        <Text classnames={['h3']} weight={400}>
          £21
        </Text>
      </Grid>
    </Grid>
  );
};

export default CartItem;
