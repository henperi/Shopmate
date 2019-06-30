import types from './types';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default categoriesReducer;
