import React from 'react';
import {
  Grid, makeStyles, Typography, Fab, Icon, Paper,
} from '@material-ui/core';
import { FaFacebookF } from 'react-icons/fa';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  container: {
    // padding: theme.spacing(5, 10),
    // textAlign: 'center',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  icons: {
    // margin: 'auto',
    width: '100%',
    // padding: theme.spacing(4),
  },
  fab: {
    margin: theme.spacing(1),
  },
  footerText: {
    // margin: 'auto',
    // width: '100%',
    // padding: theme.spacing(0),
  },
}));

const LightFooter = (props) => {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        {[1, 2, 3, 4].map(index => (
          <Grid item lg={3} key={`${index}-type`} className={clsx(classes.navRoutes)}>
            <Typography variant="h5" color="inherit" paragraph>
              Multiple
            </Typography>
          </Grid>
        ))}

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
