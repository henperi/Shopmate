import types from './types';

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_REVIEWS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reviewsReducer;
