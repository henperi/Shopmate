import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Paper,
  makeStyles,
  Breadcrumbs,
  Button,
  Fab,
  InputBase,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { FaStar } from 'react-icons/fa';
import VerticalCard from '../../components/Cards/VerticalCard';
import LightFooter from '../../components/Footers/LightFooter';
import Carousel from '../../components/Carousel/Carousel';
import LinkRouter from '../../components/LinkRouter/LinkRouter';

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
  },
  central: {
    padding: '40px',
  },
  bigButton: {
    display: 'flex',
    padding: '15px 45px 35px 45px',
    margin: '20px 0',
  },
}));

const ShopItem = () => {
  const classes = useStyles();

  return (
    <main>
      <Box mx={3} my={5}>
        <Paper>
          <Grid container spacing={2} justify="center">
            <Grid item lg={6} className={classes.carouselArea} justify="center">
              <div className={classes.carousel}>
                <Carousel thumbnail />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid item xs={12} lg={12}>
                <Breadcrumbs separator="›" aria-label="Breadcrumb" className={classes.itemDetails}>
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
                <Typography variant="h4" component="h2">
                  Super Oversized T-Shirt With Raw Sleeves In Brown
                </Typography>
                <Typography variant="h6" component="h2" color="primary">
                  £13
                </Typography>

                <Typography variant="h5" color="inherit" className="">
                  Color
                </Typography>
                <Typography variant="h5" color="inherit" className="">
                  Size
                </Typography>
                <Grid item>
                  {['xs', 'm', 'l', 'xl', 'xxl'].map(type => (
                    <Button color="inherit" variant="contained" className={classes.button}>
                      {type}
                    </Button>
                  ))}
                </Grid>
                <Typography variant="h5" color="inherit" className="">
                  Quantity
                </Typography>

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
                        style: { textAlign: 'center' },
                      }}
                    />
                  </Paper>
                  <Fab color="inherit" aria-label="Add" className={classes.button}>
                    <Remove />
                  </Fab>
                </Grid>
                <Grid container>
                  <Fab
                    color="primary"
                    variant="extended"
                    aria-label="Add"
                    size="large"
                    className={classes.bigButton}
                  >
                    Add To Cart
                  </Fab>
                </Grid>
              </Grid>
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
