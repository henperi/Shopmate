import React, { useState } from 'react';
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

const UnratedStar = ({ setReviewFormRating, ...props }) => {
  const classes = useStyles(props);
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  /**
   * @description A method to handle when a star is clicked
   * @param {number} starIndex
   * @returns {Function} setReviewRating to immedaitely set the rating to the parent form
   */
  const handleStarClick = (starIndex) => {
    setRating(starIndex);
    return setReviewFormRating(starIndex);
  };

  return (
    <Box my={2}>
      {starsArray.map(star => (
        <FaStar
          key={`${star}-starArray`}
          className={rating >= star ? classes.gold : classes.grey}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </Box>
  );
};

export default UnratedStar;
