import React from 'react';
import {
  Grid, makeStyles, Typography, Fab, Icon, Paper,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';
import clsx from 'clsx';
import LinkRouter from '../LinkRouter/LinkRouter';
import Text from '../Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 10),
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    margin: 'auto',
    width: '100%',
    padding: theme.spacing(4, 0),
  },
  fab: {
    margin: theme.spacing(1),
  },
  footerText: {
    margin: 'auto',
    width: '100%',
  },
  navRoutes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: theme.spacing(20),
  },
  linkItem: {
    boxSizing: 'border-box',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  hideSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const LightFooter = (props) => {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} className={clsx(classes.navRoutes, classes.hideSm)}>
          {[1, 2, 3, 4, 5].map(index => (
            <LinkRouter key={`${index}-type`} color="inherit" to="/l" className={classes.linkItem}>
              <Text variant="h6">Women</Text>
            </LinkRouter>
          ))}
        </Grid>

        <Grid item xs={12} md={3} className={clsx(classes.navRoutes)}>
          {[1, 2, 3, 4].map(index => (
            <Fab key={`${index}-type`} color="secondary" aria-label="Edit" className={classes.fab}>
              <Icon>
                <FaFacebookF />
              </Icon>
            </Fab>
          ))}
        </Grid>
        <Typography variant="h6" color="inherit" className={classes.footerText}>
          ©2016 shopmate Ltd • Contact • Privacy policy
        </Typography>
      </Grid>
    </Paper>
  );
};

export default LightFooter;
