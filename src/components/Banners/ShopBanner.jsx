import React from 'react';
import {
  makeStyles, Paper, Grid, Typography, Hidden,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    position: 'relative',
    maxHeight: theme.spacing(60),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      maxHeight: theme.spacing(70),
    },
  },
  image: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    color: 'white',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroContent: {
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(7),
      padding: theme.spacing(6),
      paddingRight: 0,
      width: '80%',
    },
  },
}));

const ShopBanner = () => {
  const classes = useStyles();

  return (
    <Paper className="">
      <div className={classes.imageContainer}>
        <img
          alt="Contemplative Reptile"
          src="https://source.unsplash.com/user/erondu"
          className={classes.image}
        />
        <div className={classes.overlay}>
          <div className={classes.heroContent}>
            <Typography component="h2" variant="h2" color="inherit" gutterBottom>
              Mens Wear
            </Typography>
            <Hidden xsDown>
              <Grid container className="" spacing={2}>
                <Grid item sm={4} lg={4}>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                </Grid>
                <Grid item sm={4} lg={4}>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                </Grid>
                <Grid item sm={4} lg={4}>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                    Mens Wear
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default ShopBanner;
