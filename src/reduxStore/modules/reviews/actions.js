import axiosInstance from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description An action to setReviews in the redux store
 * @param {array} reviews
 * @returns {object} reviews to set accompanied by the action type
 */
export const setReviews = reviews => ({
  type: types.SET_REVIEWS,
  payload: reviews,
});

/**
 * @description A thunk action to fetch reviews
 * @param {number} productId
 * @returns {Function} dispatch an action
 */
export const getReviews = productId => async (dispatch) => {
  try {
    const reviews = await axiosInstance.get(`/products/${productId}/reviews`);

    return dispatch(setReviews(reviews.data));
  } catch (error) {
    return console.log(error);
  }
};

export default {
  setReviews,
  getReviews,
};
