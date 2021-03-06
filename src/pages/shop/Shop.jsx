import React, { useEffect, useState } from 'react';
import {
  makeStyles, Grid, Typography, Box, Icon, Fab,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';
import Pagination from 'material-ui-flat-pagination';
import { useDispatch, useSelector } from 'react-redux';

import SubscriptionButton from '../../components/Buttons/SubscriptionButton';
import Hero from '../../components/Hero/Hero';
import bottomBarner from '../../assets/bottomBarner.png';
import ProductCard from '../../components/Cards/ProductCard';
import {
  getProductsByDepartmentId,
  clearViewProducts,
  getProductsByCategoryId,
} from '../../reduxStore/modules/products/actions';
import { getCategoriesByDepartmentId } from '../../reduxStore/modules/categories/actions';
import SideBar from '../../components/SideBar/SideBar';

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
  paginate: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
}));

const Shop = (props) => {
  const { match, location } = props;
  const { name: departmentName, id } = match.params;

  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.viewableProducts);
  const categories = useSelector(state => state.categories);

  // local state **Hooks
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10,
  });

  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    dispatch(getProductsByDepartmentId(id));
    dispatch(getCategoriesByDepartmentId(id));

    return () => dispatch(clearViewProducts());
  }, [dispatch, id]);

  const handleCategoryClick = (catId) => {
    dispatch(getProductsByCategoryId(catId));
    setCategoryId(catId);
    setPagination({
      ...pagination,
      offset: 0,
    });
  };

  const handlePaginationClick = (offset) => {
    const pageNumber = offset / pagination.limit + 1;
    setPagination({
      ...pagination,
      offset,
    });

    if (location.search.includes('?categories')) {
      return dispatch(getProductsByCategoryId(categoryId, pageNumber));
    }
    return dispatch(getProductsByDepartmentId(id, pageNumber));
  };

  return (
    <main>
      <Box mx={2} my={4}>
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
              <SideBar
                departmentName={departmentName}
                categories={categories}
                handleCategoryClick={handleCategoryClick}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={9}>
              <div className={classes.paginate}>
                <Pagination
                  limit={pagination.limit}
                  offset={pagination.offset}
                  total={products.count}
                  currentPageColor="secondary"
                  onClick={(e, offset) => handlePaginationClick(offset)}
                />
              </div>
              {!products.rows.length ? (
                <p>Loading...</p>
              ) : (
                <Grid container spacing={2}>
                  {products.rows.slice(0, 6).map(product => (
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
              )}
            </Grid>

            {products.rows.length > 0
              && products.rows.slice(6, 10).map(product => (
                <Grid
                  key={`${product.product_id}-specificproduct`}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
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
