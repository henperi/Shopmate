import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Search from '@material-ui/icons/Search';
import withWidth from '@material-ui/core/withWidth';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { Slide } from '@material-ui/core';
import clsx from 'clsx';
import Cart from '../Cart/Cart';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import LinkRouter from '../LinkRouter/LinkRouter';
import Text from '../Text/Text';

// import { getDepartments } from '../../reduxStore/modules/departments/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navLink: {
    padding: theme.spacing(2),
    display: 'inline-flex',
  },
  white: {
    color: '#FFFF',
    textDecoration: 'none',
  },
  navContainer: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  textAuth: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
  },
  navRoutes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkItem: {
    boxSizing: 'border-box',
    padding: theme.spacing(1, 2),
    '&:hover': {
      textDecoration: 'none',
    },
  },
  navIcons: {
    justifyContent: 'flex-end',
    textAlign: 'left',
  },
  hideSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  default: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  alignRight: {
    textAlign: 'right',
  },
}));

const SlideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const TopBar = (props) => {
  /**
   * State Goes here
   */
  const [cart, setCart] = useState({
    isOpen: false,
  });

  const [signin, setSignin] = useState({
    isOpen: false,
  });

  const [signup, setSignup] = useState({
    isOpen: false,
  });

  /**
   * Redux selector goes here
   */
  const departments = useSelector(state => state.departments);

  /**
   * Handler methods goe here
   */

  const toggleCartModal = () => {
    setCart({
      ...cart,
      isOpen: !cart.isOpen,
    });
  };

  const toggleSigninModal = () => {
    setSignin({
      ...signin,
      isOpen: !signin.isOpen,
    });
  };

  const toggleSignupModal = () => {
    setSignup({
      ...signup,
      isOpen: !signup.isOpen,
    });
  };

  const handleAlreadyMember = () => {
    toggleSignupModal();
    toggleSigninModal();
  };

  const handleHaveAnAccount = () => {
    toggleSigninModal();
    toggleSignupModal();
  };

  const classes = useStyles(props);

  return (
    <React.Fragment>
      <SlideOnScroll {...props}>
        <AppBar position="sticky" color="default">
          <Toolbar variant="dense" className={classes.navContainer}>
            <Grid container className={classes.root} spacing={1}>
              <Grid item xs={7} sm={5} md={3} className={clsx(classes.navRoutes)}>
                <Text variant="h6" color="inherit">
                  Hi!
                  {' '}
                  <span
                    onClick={toggleSigninModal}
                    role="presentation"
                    className={classes.textAuth}
                  >
                    Signin
                    {' '}
                  </span>
                  or
                  <span
                    onClick={toggleSignupModal}
                    role="presentation"
                    className={classes.textAuth}
                  >
                    {' '}
                    Register
                  </span>
                </Text>
              </Grid>

              <Grid item xs={1} sm={1} md={5} className={clsx(classes.navRoutes, classes.hideSm)}>
                <LinkRouter color="inherit" to="/deals" className={classes.linkItem}>
                  <Text>Daily Deals</Text>
                </LinkRouter>
                <LinkRouter color="inherit" to="/deals" className={classes.linkItem}>
                  <Text>Sell</Text>
                </LinkRouter>
                <LinkRouter color="inherit" to="/deals" className={classes.linkItem}>
                  <Text>Help & Contact</Text>
                </LinkRouter>
              </Grid>

              <Grid item xs={5} sm={7} md={4} className={clsx(classes.navRoutes, classes.navIcons)}>
                <Hidden xsDown>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Travel"
                    onClick={toggleCartModal}
                    className={classes.linkItem}
                  >
                    <Badge badgeContent={4} color="secondary">
                      <CardTravelIcon />
                    </Badge>
                  </IconButton>
                </Hidden>

                <LinkRouter
                  color="inherit"
                  to=""
                  className={clsx(classes.linkItem, classes.alignRight)}
                >
                  <Text>Your bag: £3.99</Text>
                </LinkRouter>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </SlideOnScroll>

      <AppBar position="sticky" color="primary">
        <Toolbar className={classes.navContainer}>
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={5} sm={5} md={3}>
              <LinkRouter color="inherit" to="/" className={classes.linkItem}>
                <Text variant="h4">SHOPMATE</Text>
              </LinkRouter>
            </Grid>

            <Grid item xs={1} sm={1} md={4} className={clsx(classes.navRoutes, classes.hideSm)}>
              {departments.map(department => (
                <LinkRouter
                  key={`${department.department_id}-${department.name}`}
                  color="inherit"
                  to={`/shop/${department.name}/${department.department_id}`}
                  className={classes.linkItem}
                >
                  <Text variant="h6">{department.name}</Text>
                </LinkRouter>
              ))}
            </Grid>

            <Grid item xs={7} sm={7} md={5} className={clsx(classes.navRoutes, classes.navIcons)}>
              <IconButton edge="start" className="" color="inherit" aria-label="Search">
                <Search />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Travel"
                onClick={toggleCartModal}
                className={classes.linkItem}
              >
                <Badge badgeContent={4} color="secondary" classes={{ badge: classes.default }}>
                  <CardTravelIcon />
                </Badge>
              </IconButton>

              <Hidden mdUp>
                <IconButton edge="start" className="" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
        <Cart isOpen={cart.isOpen} handleClose={toggleCartModal} />
        <Signin
          isOpen={signin.isOpen}
          handleClose={toggleSigninModal}
          handleHaveAnAccount={handleHaveAnAccount}
        />
        <Signup
          isOpen={signup.isOpen}
          handleClose={toggleSignupModal}
          handleAlreadyMember={handleAlreadyMember}
        />
      </AppBar>
    </React.Fragment>
  );
};

export default withWidth()(TopBar);
