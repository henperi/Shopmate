import React, { useEffect } from 'react';
import {
  makeStyles, Paper, Grid, Typography, Box, Icon, Fab,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';

// import ShopBanner from '../../components/Banners/ShopBanner';
// import menWear from '../../assets/menWear.png';
import SubscriptionButton from '../../components/Buttons/SubscriptionButton';
import Hero from '../../components/Hero/Hero';
import bottomBarner from '../../assets/bottomBarner.png';
import ProductCard from '../../components/Cards/ProductCard';

// import polo1 from '../../assets/images/polo-1.png';
// import polo2 from '../../assets/images/polo-2.png';
// import sweeter from '../../assets/images/sweeter.png';
import {
  getProductsByDepartmentId,
  clearViewProducts,
} from '../../reduxStore/modules/products/actions';
import { getCategoriesByDepartmentId } from '../../reduxStore/modules/categories/actions';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  filter: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    // minHeight: theme.spacing(80),
    height: '100%',
  },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    backgroundColor: '#EFEFEF',
  },
  dark: {
    backgroundColor: '#2E2E2E',
    color: 'white',
  },
  fab: {
    margin: theme.spacing(1),
  },
  footerText: {
    color: 'white',
    opacity: '0.4',
  },
  HeroTitle: {
    color: 'white',
    opacity: '1',
  },
}));

const Shop = (props) => {
  const classes = useStyles();
  const { match } = props;
  const { name: departmentName, id } = match.params;

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.viewableProducts);

  useEffect(() => {
    dispatch(getProductsByDepartmentId(id));
    dispatch(getCategoriesByDepartmentId(id));

    return () => dispatch(clearViewProducts());
  }, [dispatch, id]);

  return (
    <main>
      <Box mx={2} my={4}>
        {
          // <ShopBanner image={menWear} />
        }
        <Hero image={bottomBarner} height={30}>
          <Typography
            component="h3"
            variant="h3"
            color="inherit"
            gutterBottom
            className={classes.HeroTitle}
          >
            {departmentName}
          </Typography>
        </Hero>

        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Paper className={`${classes.paper} ${classes.filter}`}>
                This is the filter section
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={9}>
              <Grid container spacing={2}>
                {products.slice(0, 6).map(product => (
                  <Grid
                    key={`${product.product_id}-specificproduct`}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                  >
                    <ProductCard
                      image={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
                      name={product.name}
                      id={product.product_id}
                      price={product.price}
                      discountedPrice={product.discounted_price}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {products.slice(6, 10).map(product => (
              <Grid key={`${product.product_id}-specificproduct`} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  image={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
                  name={product.name}
                  price={product.price}
                  discountedPrice={product.discounted_price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Hero image={bottomBarner} height={45} />
      </Box>
      <Box mx={2} className={`${classes.container}`}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item sm={7}>
            <Typography variant="h4" color="inherit">
              Multiple lines of text that form the lede
            </Typography>
          </Grid>
          <Grid item sm={5}>
            <SubscriptionButton />
          </Grid>
        </Grid>
      </Box>
      <Box mx={2} className={`${classes.container}`}>
        <Grid container spacing={2} className={`${classes.dark}`}>
          {[1, 2, 3, 4].map(item => (
            <Grid key={`footer-${item}`} item sm={3}>
              <Typography variant="h4" color="inherit">
                Multiple
              </Typography>
            </Grid>
          ))}
          <Grid container direction="row" justify="center">
            <Grid item sm={12} className={`${classes.paper}`}>
              {[1, 2, 3, 4].map(item => (
                <Fab
                  key={`fabs-${item}`}
                  color="secondary"
                  aria-label="Edit"
                  className={classes.fab}
                >
                  <Icon>
                    <FaFacebookF />
                  </Icon>
                </Fab>
              ))}
            </Grid>
            <Grid item sm={12} className={`${classes.paper}`}>
              <Typography variant="h6" color="inherit" className={classes.footerText}>
                ©2016 shopmate Ltd • Contact • Privacy policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default Shop;
