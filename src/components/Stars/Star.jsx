import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FaStar } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  gold: {
    color: 'gold',
    fontSize: '20px',
  },
  grey: {
    color: theme.palette.grey[400],
    fontSize: '20px',
  },
}));
const Star = (props) => {
  const classes = useStyles(props);
  const starsArray = [1, 2, 3, 4, 5];
  const { rating } = props;

  return (
    <Box my={2}>
      {starsArray.map(star => (
        <FaStar
          key={`${star}-starArray`}
          className={rating >= star ? classes.gold : classes.grey}
        />
      ))}
    </Box>
  );
};

export default Star;
