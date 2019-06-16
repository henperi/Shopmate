import React from 'react';
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
// import FaCircle from '@material-ui/icons/RadioButtonChecked';

import { FaStar, FaRegHeart, FaCircle } from 'react-icons/fa';
import VerticalCard from '../../components/Cards/VerticalCard';
import LightFooter from '../../components/Footers/LightFooter';
import Carousel from '../../components/Carousel/Carousel';
import LinkRouter from '../../components/LinkRouter/LinkRouter';
import Text from '../../components/Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  carouselArea: {
    margin: 'auto auto',
  },
  carousel: {
    padding: '20px',
    margin: 'auto',
  },
  details: {
    padding: '10px 20px',
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

const ShopItem = () => {
  const classes = useStyles();

  return (
    <main>
      <Box mx={3} my={5}>
        <Paper>
          <Grid container spacing={2} justify="center">
            <Grid item md={6} className={classes.carouselArea} justify="center">
              <div className={classes.carousel}>
                <Carousel thumbnail />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.details}>
                <Grid item xs={12} md={12}>
                  <Breadcrumbs
                    separator="›"
                    aria-label="Breadcrumb"
                    className={classes.itemDetails}
                  >
                    <LinkRouter color="inherit" to="/shop" onClick="">
                      MUI
                    </LinkRouter>
                    <LinkRouter color="inherit" to="/shop" onClick="">
                      MUI
                    </LinkRouter>
                    <LinkRouter color="inherit" to="/shop" onClick="">
                      Mens Clothing & Accessories
                    </LinkRouter>
                  </Breadcrumbs>
                </Grid>
                <Grid item xs={12} lg={12} className={classes.itemDetails}>
                  {[1, 2, 3, 4].map(star => (
                    <FaStar key={star} className={classes.gold} />
                  ))}
                  <FaStar className={classes.default} />

                  <Text classNames={['h2']} gutterBottom>
                    Super Oversized T-Shirt With Raw Sleeves In Brown
                  </Text>

                  <Text color="primary" classNames={['h2']} gutterBottom>
                    £13
                  </Text>

                  <Text classNames={['body1']} gutterBottom>
                    Color
                  </Text>

                  {[1, 2, 3, 4, 5].map(() => (
                    <Radio
                      checked={false}
                      color="primary"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'E' }}
                      icon={<FaCircle fontSize="small" />}
                      checkedIcon={<FaCircle fontSize="large" className={classes.gold} />}
                    />
                  ))}
                  <Text classNames={['body1']} gutterBottom>
                    Size
                  </Text>
                  <Grid item>
                    {['xs', 'm', 'l', 'xl', 'xxl'].map(type => (
                      <Button color="inherit" variant="contained" className={classes.button}>
                        {type}
                      </Button>
                    ))}
                  </Grid>

                  <Text classNames={['body1']} weight={700} gutterBottom>
                    Quantity
                  </Text>

                  <Grid container>
                    <Fab color="inherit" aria-label="Add" className={classes.button}>
                      <AddIcon />
                    </Fab>
                    <Paper className={[classes.inputField, classes.button]} component="span">
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
                      className={[classes.bigButton, classes.chubby]}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      aria-label="Add"
                      size="large"
                      className={[classes.bigButton, classes.chubby]}
                    >
                      <FaRegHeart className={classes.heart} />
                      <Text classNames={['body1']} gutterBottom>
                        Add to Wish List
                      </Text>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.reviews}>
          <Grid item xs={12} lg={12}>
            {}
          </Grid>
        </Paper>
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
