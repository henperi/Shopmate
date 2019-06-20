import React from 'react';
import {
  makeStyles, Paper, Grid, Typography, Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: props => `url(${props.image || 'https://source.unsplash.com/user/erondu'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: props => props.height && theme.spacing(props.height),
    maxHeight: props => props.height > 60 && theme.spacing(60),
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    color: 'white',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(7),
      padding: theme.spacing(6),
      paddingRight: 0,
      width: '80%',
    },
    maxHeight: props => props.height && theme.spacing(props.height - 10),
    overflow: 'hidden',
  },
  chubby: {
    borderRadius: theme.spacing(5),
  },
  customButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    textTransform: 'capitalize',
    padding: `${theme.spacing(1)}px ${theme.spacing(4.5)}px`,
  },
}));

const Hero = (props) => {
  const classes = useStyles(props);
  const { content } = { props };

  return (
    <Paper className={classes.hero}>
      <div className={classes.overlay} />

      <Grid container>
        <Grid item sm={6} md={6}>
          {content || (
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
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
