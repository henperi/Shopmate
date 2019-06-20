import React from 'react';
import {
  Paper, Grid, makeStyles, Fab, TextField, Button,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';

import clsx from 'clsx';
import Text from '../Text/Text';
import Star from '../Stars/Star';

const useStyles = makeStyles(theme => ({
  reviews: {
    backgroundColor: '#FAFAFA',
    minHeight: '740px',
    marginBottom: `${theme.spacing(5)}px`,
    padding: theme.spacing(8),
  },
  section1: {
    margin: '20px 0',
  },
  form: {
    display: 'flex',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  textField: {
    backgroundColor: 'white',
  },
  chubby: {
    borderRadius: theme.spacing(5),
  },
}));

const Reviews = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.reviews}>
      <Grid container spacing={2} className={classes.section1}>
        <Grid item xs={12} lg={12}>
          <Text classnames={['h2']}>Product reviews</Text>
        </Grid>
        <Grid item lg={4}>
          <Star />
          <Text classnames={['h3']}>Pablo Permins</Text>
          <Text classnames={['body2']}>one hour ago</Text>
        </Grid>
        <Grid item lg={8}>
          <Text classnames={['body1']} gutterBottom>
            Got this through the post the other day and right from opening the packet I knew this
            was quality, put it on and I was right!! Well done
          </Text>
          <Fab color="inherit" aria-label="Add" size="small" className={classes.button}>
            <FaRegHeart />
          </Fab>
          <Text classnames={['body1']} padding="5px" component="span">
            113
          </Text>
          <Fab color="inherit" aria-label="Add" size="small" className={classes.button}>
            <FaRegComment />
          </Fab>
          <Text classnames={['body1']} padding="5px" component="span">
            113
          </Text>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} className={classes.section1}>
        <Grid item xs={12} lg={12}>
          <Text classnames={['h2']}>Add a review</Text>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item xs={12} lg={4} className={classes.alignCenter}>
              <Text classnames={['h3']}>Choose a nickname</Text>
            </Grid>
            <Grid item xs={12} lg={8}>
              <TextField
                id="outlined-name"
                label="Nickname"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.alignCenter}>
              <Text classnames={['h3']}>Your review</Text>
            </Grid>
            <Grid item xs={12} lg={8}>
              <TextField
                id="outlined-name"
                label="Review"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
              />
              <Text classnames={['body2']}>Your review must be at least 50 characters</Text>
            </Grid>
            <Grid item xs={12} lg={4} className={classes.alignCenter}>
              <Text classnames={['h3']}>Overall rating</Text>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Star />

              <Button
                color="primary"
                variant="contained"
                aria-label="Add"
                size="large"
                className={clsx(classes.chubby)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Reviews;
