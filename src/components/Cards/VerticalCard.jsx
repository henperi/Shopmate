import React from 'react';
import {
  Card, CardContent, Typography, makeStyles, CardActions, Button,
} from '@material-ui/core';

import manPushing from '../../assets/images/manPushing.png';
import OverlayedImage from '../Images/OverlayedImage';
import Text from '../Text/Text';

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
  verticalCard: {
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.5)',
    },
  },
}));

const VerticalCard = (props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.verticalCard}>
      <OverlayedImage
        alt="Contemplative Reptile"
        image={manPushing}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Text color="inherit" classnames={['h2']}>
          Men
        </Text>
      </OverlayedImage>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions className={`${classes.central} ${classes.cardActions}`}>
        <Button size="medium" variant="contained" color="primary" className={classes.chubby}>
          Register
        </Button>
      </CardActions>
    </Card>
  );
};

export default VerticalCard;
