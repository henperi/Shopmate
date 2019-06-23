import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Search from '@material-ui/icons/Search';
import withWidth from '@material-ui/core/withWidth';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { Slide } from '@material-ui/core';
import Cart from '../Cart/Cart';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

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
  navIcons: {
    justifyContent: 'flex-end',
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
  const [cart, setCart] = useState({
    isOpen: false,
  });

  const [signin, setSignin] = useState({
    isOpen: false,
  });

  const [signup, setSignup] = useState({
    isOpen: false,
  });

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

  const classes = useStyles();
  return (
    <React.Fragment>
      <SlideOnScroll {...props}>
        <AppBar position="sticky" color="default">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="Travel"
              onClick={toggleSigninModal}
            >
              <Badge badgeContent={4} color="secondary">
                <CardTravelIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="Travel"
              onClick={toggleSignupModal}
            >
              <Badge badgeContent={4} color="secondary">
                <CardTravelIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </SlideOnScroll>

      <AppBar position="sticky" color="primary">
        <Toolbar variant="dense">
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={5} sm={5} md={3}>
              <Link to="/" className={classes.white}>
                <Typography variant="h4" color="inherit" className={classes.navLink}>
                  SHOPMATE
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={2} sm={1} md={6}>
              <Hidden smDown>
                <Link to="/l" className={classes.white}>
                  <Typography variant="h6" color="inherit" className={classes.navLink}>
                    Women
                  </Typography>
                </Link>
                <Link to="/shop" className={classes.white}>
                  <Typography variant="h6" color="inherit" className={classes.navLink}>
                    Men
                  </Typography>
                </Link>
                <Link to="/checkout" className={classes.white}>
                  <Typography variant="h6" color="inherit" className={classes.navLink}>
                    Kids
                  </Typography>
                </Link>
                <Link to="/shop" className={classes.white}>
                  <Typography variant="h6" color="inherit" className={classes.navLink}>
                    Shoes
                  </Typography>
                </Link>
                <Link to="/shop" className={classes.white}>
                  <Typography variant="h6" color="inherit" className={classes.navLink}>
                    Brands
                  </Typography>
                </Link>
              </Hidden>
            </Grid>

            <Grid item xs={5} sm={6} md={3} className={`${classes.navLink} ${classes.navIcons}`}>
              <IconButton edge="start" className="" color="inherit" aria-label="Search">
                <Search />
              </IconButton>
              <IconButton
                edge="start"
                className=""
                color="inherit"
                aria-label="Travel"
                onClick={toggleCartModal}
              >
                <Badge badgeContent={4} color="secondary">
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
