import React from 'react';
import {
  Card, CardContent, Typography, makeStyles, CardActions, Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  chubby: {
    borderRadius: theme.spacing(2.5),
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    textTransform: 'capitalize',
  },
  central: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardActions: {
    paddingBottom: theme.spacing(4),
  },
  horizontalCard: {
    display: 'flex',
    maxHeight: theme.spacing(25),
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.5)',
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      maxHeight: 'none',
    },
  },
  imageContainer: {
    position: 'relative',
    width: theme.spacing(75),
    maxHeight: theme.spacing(30),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      width: 'inherit',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  verticalCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: '8px',
    left: '16px',
  },
}));

const HorizontalCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.horizontalCard}>
      <div className={classes.imageContainer}>
        <img
          alt="Contemplative Reptile"
          src="https://source.unsplash.com/user/erondu"
          className={classes.image}
        />
        <div className={classes.overlay}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Lizard
          </Typography>
        </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
        <CardActions className="">
          <Button size="medium" variant="contained" color="primary" className={classes.chubby}>
            Register
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default HorizontalCard;
