import React from 'react';
import {
  makeStyles, Paper, Grid, Typography, Hidden, Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: props => `url(${props.backgroundImage || 'https://source.unsplash.com/user/erondu'})`,
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

const DynamicHero = (props) => {
  const classes = useStyles(props);
  const { content, contentPosition } = props;

  return (
    <Paper className={classes.hero}>
      <div className={classes.overlay} />

      <Grid container justify={contentPosition}>
        <Grid item sm={6} md={6}>
          {content && content}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DynamicHero;
