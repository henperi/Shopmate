import React from 'react';
import {
  Grid, makeStyles, Typography, Fab, Icon, Hidden, Paper,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.spacing(5)}px ${theme.spacing(1)}px`,
    textAlign: 'center',
  },
  icons: {
    margin: 'auto',
    width: '100%',
    padding: theme.spacing(4),
  },
  fab: {
    margin: theme.spacing(1),
  },
  footerText: {
    margin: 'auto',
    width: '100%',
    padding: theme.spacing(0),
  },
  root: {
    // position: 'absolute',
    // display: 'block',
    // bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignContent: 'flex-end',
    // alignSelf: 'flex-end',
  },
}));

const LightFooter = (props) => {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Grid container direction="row" alignItems="center" className={classes.container}>
        <Hidden xsDown>
          {[1, 2, 3, 4].map(index => (
            <Grid item lg={3} key={`${index}-type`}>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple
              </Typography>
            </Grid>
          ))}
        </Hidden>
        <div className={classes.icons}>
          {[1, 2, 3, 4].map(index => (
            <Fab key={`${index}-type`} color="secondary" aria-label="Edit" className={classes.fab}>
              <Icon>
                <FaFacebookF />
              </Icon>
            </Fab>
          ))}
        </div>
        <Typography variant="h6" color="inherit" className={classes.footerText}>
          ©2016 shopmate Ltd • Contact • Privacy policy
        </Typography>
      </Grid>
    </Paper>
  );
};

export default LightFooter;
