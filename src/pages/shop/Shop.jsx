import React from 'react';
import {
  makeStyles, Paper, Grid, Typography, Box,
} from '@material-ui/core';
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
}));

const Shop = () => {
  const classes = useStyles();

  return (
    <main>
      <Box mx={2} my={4}>
        <ShopBanner />

        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Paper className={`${classes.paper} ${classes.filter}`}>This is section 1</Paper>
            </Grid>
            <Grid item lg={9}>
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Paper className={classes.paper}>This is section 1</Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={4}>
              <Paper className={`${classes.paper}`}>This is section 1</Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={`${classes.paper}`}>This is section 1</Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={`${classes.paper}`}>This is section 1</Paper>
            </Grid>
          </Grid>
        </Box>

        <ShopBanner />
      </Box>
      <Grid container spacing={2} className={`${classes.container}`}>
        <Grid item sm={7} justify="center">
          <Typography variant="h4" color="inherit">
            Multiple lines of text that form the lede
          </Typography>
        </Grid>
        <Grid item sm={5}>
          <SubscriptionButton />
        </Grid>
      </Grid>
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
    </main>
  );
};

export default Shop;
