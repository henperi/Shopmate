import React from 'react';
import {
  makeStyles, Paper, Grid, Typography, Box, Icon, Fab,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';

import ShopBanner from '../../components/Banners/ShopBanner';
import SubscriptionButton from '../../components/Buttons/SubscriptionButton';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  filter: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    minHeight: theme.spacing(80),
  },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    backgroundColor: '#EFEFEF',
  },
  dark: {
    backgroundColor: '#2E2E2E',
    color: 'white',
  },
  fab: {
    margin: theme.spacing(1),
  },
  footerText: {
    color: 'white',
    opacity: '0.4',
  },
}));

const Shop = () => {
  const classes = useStyles();

  return (
    <main>
      <Box mx={2} my={4}>
        <ShopBanner />

        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Paper className={`${classes.paper} ${classes.filter}`}>This is section 1</Paper>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <Grid xs={12} item lg={4}>
                    <Paper className={classes.paper}>This is section 1</Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {[1, 2, 3].map(item => (
              <Grid item xs={12} lg={4}>
                <Paper className={`${classes.paper}`}>This is section 1</Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <ShopBanner />
      </Box>
      <Box mx={2} className={`${classes.container}`}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item sm={7} justify="center">
            <Typography variant="h4" color="inherit">
              Multiple lines of text that form the lede
            </Typography>
          </Grid>
          <Grid item sm={5}>
            <SubscriptionButton />
          </Grid>
        </Grid>
      </Box>
      <Box mx={2} className={`${classes.container}`}>
        <Grid container spacing={2} className={`${classes.dark}`}>
          {[1, 2, 3, 4].map(item => (
            <Grid item sm={3} justify="center">
              <Typography variant="h4" color="inherit">
                Multiple
              </Typography>
            </Grid>
          ))}
          <Grid container direction="row" justify="center">
            <Grid item sm={12} className={`${classes.paper}`}>
              {[1, 2, 3, 4].map(item => (
                <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                  <Icon>
                    <FaFacebookF />
                  </Icon>
                </Fab>
              ))}
            </Grid>
            <Grid item sm={12} className={`${classes.paper}`}>
              <Typography variant="h6" color="inherit" className={classes.footerText}>
                ©2016 shopmate Ltd • Contact • Privacy policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default Shop;
