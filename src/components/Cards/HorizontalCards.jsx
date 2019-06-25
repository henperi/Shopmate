import React from 'react';
import {
  Card, CardContent, Typography, makeStyles, CardActions, Button,
} from '@material-ui/core';
import bagImage from '../../assets/images/bag.png';
import redShirt from '../../assets/red-shirt.png';
import longImage from '../../assets/longImage.jpeg';

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
    maxHeight: '312px',
    padding: '10px',
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.5)',
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      maxHeight: '600px',
      // minimumHeight: '100%',
    },
  },
  imageContainer: {
    // display: 'flex',
    position: 'relative',
    minWidth: '30%',
    // maxWidth: '45%',
    // maxHeight: theme.spacing(30),
    maxHeight: '300px',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      width: 'inherit',
      maxHeight: '500px',
    },
  },
  image: {
    width: '100%',
  },
  verticalCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: '8px',
    left: '8px',
  },
  cardContent: {
    minWidth: '60%',
  },
}));

const HorizontalCard = (props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.horizontalCard}>
      <div className={classes.imageContainer}>
        <img
          alt="Contemplative Reptile"
          src={props.image || redShirt || 'https://source.unsplash.com/user/erondu'}
          className={classes.image}
        />
        <div className={classes.overlay}>
          {props.overlayLabel || (
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              Lizard
            </Typography>
          )}
        </div>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title || 'Lizard'}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body
            || `Carry the day in style with this extra-large tote crafted in our chic B.B. Collection
          textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus
          just enough perfectly placed pockets to keep smaller items organized and easy to find.`}
        </Typography>
        <CardActions className="">
          <Button size="medium" variant="contained" color="primary" className={classes.chubby}>
            {props.btnLabel || 'Register'}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default HorizontalCard;
