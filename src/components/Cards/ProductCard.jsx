import React, { useState } from 'react';
import {
  CardContent, makeStyles, CardActions, Button, Paper,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import polo1 from '../../assets/images/polo-1.png';
import Text from '../Text/Text';
import ProductImg from '../Images/ProductImg';
import LinkRouter from '../LinkRouter/LinkRouter';
import { generateCartId, addToCart } from '../../reduxStore/modules/shoppinCart/actions';

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
    minHeight: '80px',
  },
  verticalCard: {
    padding: '20px',
    boxSizing: 'border-box',
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)',
    },
  },
  label: {
    padding: '5px',
    backgroundColor: 'lightblue',
  },
}));

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const cart = useSelector(state => state.cart);

  // console.log(cart);

  const dispatch = useDispatch();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleBuyItem = async (id) => {
    let { cartId } = cart;

    if (!cartId) {
      cartId = await dispatch(generateCartId());
    }
    dispatch(addToCart(cartId, id, ' '));
  };

  const classes = useStyles(props);
  return (
    <Paper className={classes.verticalCard} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <ProductImg alt="Contemplative Reptile" image={props.image || polo1}>
        <span className={classes.label}>
          <Text color="inherit" classnames={['body1']}>
            Men
          </Text>
        </span>
      </ProductImg>
      <CardContent className={classes.central}>
        <Text color="inherit" classnames={['h3']} weight="100">
          {props.name}
        </Text>
      </CardContent>

      <CardActions className={`${classes.central} ${classes.cardActions}`}>
        {isHovered ? (
          <React.Fragment>
            <LinkRouter color="inherit" to={`/shop-item/${props.id}`} className={classes.linkItem}>
              <Button size="medium" variant="contained" color="primary" className={classes.chubby}>
                See Item
              </Button>
            </LinkRouter>
            <Button
              onClick={() => handleBuyItem(props.id)}
              size="medium"
              variant="contained"
              color="primary"
              className={classes.chubby}
            >
              Buy Now
            </Button>
          </React.Fragment>
        ) : (
          <Text color="primary" classnames={['h3']}>
            {`£${props.price}`}
          </Text>
        )}
      </CardActions>
    </Paper>
  );
};

export default ProductCard;
