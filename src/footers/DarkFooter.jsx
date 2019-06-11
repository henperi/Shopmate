import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SubscriptionButton from '../components/Buttons/SubscriptionButton';

const DarkFooter = () => {
  const classes = makeStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2} className={`${classes.paper}`}>
        <Grid item sm={3} justify="center">
          <Typography variant="h4" color="inherit">
            Multiple
          </Typography>
        </Grid>
        <Grid item sm={3} justify="center">
          <Typography variant="h4" color="inherit">
            Multiple
          </Typography>
        </Grid>
        <Grid item sm={3} justify="center">
          <Typography variant="h4" color="inherit">
            Multiple
          </Typography>
        </Grid>
        <Grid item sm={3} justify="center">
          <Typography variant="h4" color="inherit">
            Multiple
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="center">
        <Grid item sm={2} className={`${classes.paper}`}>
          <SubscriptionButton />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DarkFooter;
