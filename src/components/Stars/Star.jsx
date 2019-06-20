import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FaStar } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  gold: {
    color: 'gold',
    fontSize: '20px',
  },
}));
const Star = () => {
  const classes = useStyles();
  return (
    <Box my={2}>
      {[1, 2, 3, 4, 5].map(star => (
        <FaStar key={star} className={classes.gold} />
      ))}
    </Box>
  );
};

export default Star;
