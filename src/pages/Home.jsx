import React from 'react';
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
  withStyles,
  Box,
  IconButton,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InputBase from '@material-ui/core/InputBase';

import Fab from '@material-ui/core/Fab';
import VerticalCard from '../components/Cards/VerticalCard';
import HorizontalCard from '../components/Cards/HorizontalCards';
import CustomImage from '../components/Images/CutomImage';

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(7),
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  chubby: {
    borderRadius: theme.spacing(5),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
  },
  central: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  customButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    textTransform: 'capitalize',
    padding: `${theme.spacing(1)}px ${theme.spacing(4.5)}px`,
  },
  container: {
    padding: `${theme.spacing(7)}px ${theme.spacing(2)}px`,
  },
  subscriptionArea: {
    textAlign: 'center',
    backgroundColor: '#EFEFEF',
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '50%',
    borderRadius: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  iconButton: {
    padding: 10,
  },
}));

export const CustomButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    textTransform: 'capitalize',
    padding: theme.spacing(8),
  },
}))(Fab);

const Home = () => {
  const classes = useStyles();
  return (
    <main>
      <Paper className={classes.hero}>
        <div className={classes.overlay} />

        <Grid container>
          <Grid item sm={6} md={6}>
            <div className={classes.heroContent}>
              <Typography component="h3" variant="h3" color="inherit" gutterBottom>
                Background and Development
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what&apos;s
              </Typography>
              <Button
                size="medium"
                variant="contained"
                className={`${classes.chubby} ${classes.customButton}`}
              >
                View All
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Box mx={3} my={3}>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map(item => (
            <Grid key={item} item sm={6} md={4} lg={3}>
              <VerticalCard />
            </Grid>
          ))}
          {[1, 2, 3, 4].map(item => (
            <Grid key={item} item sm={12} md={6} lg={6}>
              <HorizontalCard />
            </Grid>
          ))}
          {[1, 2].map(item => (
            <Grid key={item} item sm={6} md={4} lg={3}>
              <CustomImage alt="Image" overlayPosition="bottomRight" />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={`${classes.container} ${classes.subscriptionArea}`}
      >
        <Grid item sm={6}>
          <Typography variant="h5" color="primary" paragraph>
            Multiple lines of text that form the lede
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Multiple lines of text that form the lede, informing new readers quickly and efficiently
            about what&apos;s Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what&apos;s
          </Typography>
          <Paper className={classes.inputField} component="span">
            <IconButton aria-label="Menu">
              <EmailIcon />
            </IconButton>
            <InputBase
              type="email"
              fullWidth
              placeholder="Enter your email address"
              inputProps={{ 'aria-label': 'Search Google Maps' }}
            />
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={`${classes.chubby} ${classes.chubby}`}
            >
              Subscribe
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" className={classes.container}>
        <Grid item lg={3}>
          <Typography variant="h5" color="inherit" paragraph>
            Multiple
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Multiple lines of text that form the lede
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" color="inherit" paragraph>
            Multiple
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Multiple lines of text that form the lede
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" color="inherit" paragraph>
            Multiple
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Multiple lines of text that form the lede
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" color="inherit" paragraph>
            Multiple
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Multiple lines of text that form the lede
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
