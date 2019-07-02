import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Breadcrumbs,
  Button,
  Fab,
  InputBase,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Radio from '@material-ui/core/Radio';

import { useDispatch, useSelector } from 'react-redux';

import { FaStar, FaRegHeart, FaCircle } from 'react-icons/fa';
import clsx from 'clsx';
import VerticalCard from '../../components/Cards/VerticalCard';
import LightFooter from '../../components/Footers/LightFooter';
import Carousel from '../../components/Carousel/Carousel';
import LinkRouter from '../../components/LinkRouter/LinkRouter';
import Text from '../../components/Text/Text';
import Reviews from '../../components/Reviews/Reviews';
import { getProductById } from '../../reduxStore/modules/products/actions';
import appConstants from '../../appConstants';
import { getReviews } from '../../reduxStore/modules/reviews/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  carouselArea: {
    margin: 'auto auto',
  },
  carousel: {
    margin: 'auto',
    padding: theme.spacing(3, 0),
  },
  details: {
    padding: theme.spacing(4, 8),
  },
  reviews: {
    backgroundColor: theme.palette.grey[200],
    minHeight: '740px',
    marginBottom: `${theme.spacing(5)}px`,
  },
  itemDetails: {
    marginTop: '15px',
  },
  gold: {
    color: 'gold',
    fontSize: '20px',
  },
  default: {
    color: theme.palette.grey[200],
    fontSize: '20px',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  inputField: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    width: '60px',
    borderRadius: theme.spacing(3),
    fontWeight: '500',
  },
  central: {
    padding: '40px',
  },
  bigButton: {
    display: 'flex',
    padding: '15px 45px',
    margin: '20px 0',
  },
  chubby: {
    borderRadius: theme.spacing(5),
  },
  heart: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
}));

const ShopItem = (props) => {
  const classes = useStyles();
  const { match } = props;
  const { itemId } = match.params;

  const dispatch = useDispatch();
  const item = useSelector(state => state.products.currentProduct);
  const reviews = useSelector(state => state.reviews);

  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(getProductById(itemId));
    dispatch(getReviews(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    if (item.image) {
      const { image, image_2: image2, thumbnail } = item;

      setImages([
        `${appConstants.imageUrl}${image}`,
        `${appConstants.imageUrl}${image2}`,
        `${appConstants.imageUrl}${thumbnail}`,
      ]);
    }
  }, [item]);

  return (
    <main>
      <Box mx={3} my={5}>
        <Paper className={classes.details}>
          {item.name && (
            <Grid container spacing={10} justify="center">
              <Grid item md={5} className={classes.carouselArea}>
                <div className={classes.carousel}>
                  <Carousel thumbnail images={images} />
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <Grid item xs={12} md={12}>
                  <Breadcrumbs
                    separator="›"
                    aria-label="Breadcrumb"
                    className={classes.itemDetails}
                  >
                    <LinkRouter color="inherit" to="/shop/Regional/1">
                      Regional
                    </LinkRouter>
                    <LinkRouter color="inherit" to={`/shop-item/${itemId}`}>
                      {item.name || ''}
                    </LinkRouter>
                  </Breadcrumbs>
                </Grid>
                <Grid item xs={12} lg={12} className={classes.itemDetails}>
                  {[1, 2, 3, 4].map(star => (
                    <FaStar key={star} className={classes.gold} />
                  ))}
                  <FaStar className={classes.default} />

                  <Text classnames={['h2']} gutterBottom>
                    {item.name}
                  </Text>

                  <Text color="primary" classnames={['h2']} gutterBottom>
                    {`£${item.price}`}
                  </Text>

                  <Text classnames={['body1']} gutterBottom>
                    Color
                  </Text>

                  {[1, 2, 3, 4, 5].map(type => (
                    <Radio
                      key={`${type}rad`}
                      color="primary"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'E' }}
                      icon={<FaCircle fontSize="small" />}
                      checkedIcon={<FaCircle fontSize="large" className={classes.gold} />}
                    />
                  ))}
                  <Text classnames={['body1']} gutterBottom>
                    Size
                  </Text>
                  <Grid item>
                    {['xs', 'm', 'l', 'xl', 'xxl'].map(type => (
                      <Button
                        key={`${type}but`}
                        color="inherit"
                        variant="contained"
                        className={classes.button}
                      >
                        {type}
                      </Button>
                    ))}
                  </Grid>

                  <Text classnames={['body1']} weight={700} gutterBottom>
                    Quantity
                  </Text>

                  <Grid container>
                    <Fab color="inherit" aria-label="Add" className={classes.button}>
                      <AddIcon />
                    </Fab>
                    <Paper className={clsx(classes.inputField, classes.button)} component="span">
                      <InputBase
                        fullWidth
                        defaultValue="2"
                        type="text"
                        inputProps={{
                          style: {
                            textAlign: 'center',
                          },
                        }}
                      />
                    </Paper>
                    <Fab color="inherit" aria-label="Add" className={classes.button}>
                      <Remove />
                    </Fab>
                  </Grid>
                  <Grid container>
                    <Button
                      color="primary"
                      variant="contained"
                      aria-label="Add"
                      size="large"
                      className={clsx(classes.bigButton, classes.chubby)}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      aria-label="Add"
                      size="large"
                      className={clsx(classes.bigButton, classes.chubby)}
                    >
                      <FaRegHeart className={classes.heart} />
                      <Text classnames={['body1']} gutterBottom>
                        Add to Wish List
                      </Text>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Paper>
        {reviews.length > 0 && <Reviews reviews={reviews} />}
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map(item => (
            <Grid key={item} item sm={6} md={4} lg={3}>
              <VerticalCard />
            </Grid>
          ))}
        </Grid>
      </Box>

      <LightFooter />
    </main>
  );
};

export default ShopItem;
