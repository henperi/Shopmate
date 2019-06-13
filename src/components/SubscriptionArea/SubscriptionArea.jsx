import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import SubscriptionButton from '../Buttons/SubscriptionButton';

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.spacing(7)}px ${theme.spacing(2)}px`,
  },
  subscriptionArea: {
    textAlign: 'center',
    backgroundColor: '#EFEFEF',
    display: 'flex',
  },
  subsWidth: {
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export const SubscriptionTypeA = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      textAlign="center"
      className={`${classes.container} ${classes.subscriptionArea}`}
    >
      <Grid item sm={6}>
        <Typography variant="h5" color="primary" paragraph>
          Multiple lines of text that form the lede
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          Multiple lines of text that form the lede, informing new readers quickly and efficiently
          about what&apos;s Multiple lines of text that form the lede, informing new readers quickly
          and efficiently about what&apos;s
        </Typography>
        <div className={classes.subsWidth}>
          <SubscriptionButton />
        </div>
      </Grid>
    </Grid>
  );
};

const SubscriptionArea = {
  SubscriptionTypeA,
};

export default SubscriptionArea;
