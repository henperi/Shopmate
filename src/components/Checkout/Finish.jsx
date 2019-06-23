import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Text from '../Text/Text';
import rocketIcon from '../../assets/icons/rocket.png';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}));

const Confirmation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} justify="center" className={classes.root}>
      <Grid item xs={12} md={12}>
        <img src={rocketIcon} alt="success" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Text
          classnames={['h2']}
          margin="10px 0"
          style={{ fontSize: '48px', fontFamily: 'LucidaGrande-Bold' }}
        >
          Success
        </Text>
        <Text classnames={['body1']} margin="10px 0">
          Your items will be shipped shortly, you will get email with details.
        </Text>
      </Grid>
    </Grid>
  );
};

export default Confirmation;
