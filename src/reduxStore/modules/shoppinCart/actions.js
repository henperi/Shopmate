import axiosInstance from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description An action to set cart Items in the redux store
 * @param {array} cartItems
 * @returns {object} products to set accompanied by the action type
 */
export const setCart = cartItems => ({
  type: types.SET_CART,
  payload: cartItems,
});

/**
 * @description An action to set cart id in the redux store
 * @param {string} cartId
 * @returns {object} products to set accompanied by the action type
 */
export const setCartId = (cartId) => {
  localStorage.setItem('cartId', cartId);

  return {
    type: types.SET_CART_ID,
    payload: cartId,
  };
};

/**
 * @description An action to empty cart Items in the redux store
 * @returns {object} products to set accompanied by the action type
 */
export const setEmptyCart = () => ({
  type: types.EMPTY_CART,
});

/**
 * @description An action to set cart total amount in the redux store
 * @param {number} total
 * @returns {object} products to set accompanied by the action type
 */
export const setCartTotal = total => ({
  type: types.SET_CART_TOTAL,
  payload: total,
});

/**
 * @description thunk action to generate cartId
 * @returns {any} dispatch an action
 */
export const generateCartId = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/shoppingcart/generateUniqueId');

    dispatch(setCartId(data.cart_id));

    return data.cart_id;
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to fetch items in cart
 * @param {string} cartId
 * @returns {Function} dispatch an action
 */
export const getCartTotal = cartId => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/shoppingcart/totalAmount/${cartId}`);

    return dispatch(setCartTotal(data.total_amount));
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to fetch items in cart
 * @param {string} cartId
 * @returns {Function} dispatch an action
 */
export const getCart = cartId => async (dispatch) => {
  try {
    const cartItems = await axiosInstance.get(`/shoppingcart/${cartId}`);

    dispatch(getCartTotal(cartId));

    return dispatch(setCart(cartItems.data));
  } catch (error) {
    localStorage.removeItem('cartId');
    return console.log(error);
  }
};

/**
 * @description A thunk action to add a cartable item
 * @param {string} cartId
 * @param {number} productId
 * @param {string} attributes
 * @returns {Function} dispatch an action
 */
export const addToCart = (cartId, productId, attributes) => async (dispatch) => {
  const data = {
    cart_id: cartId,
    product_id: productId,
    attributes,
  };
  try {
    await axiosInstance.post('/shoppingcart/add', data);

    return dispatch(getCart(cartId));
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to update an item in the cart
 * @param {string} itemId
 * @param {number} quantity
 * @returns {Function} dispatch an action
 */
export const updateCart = (itemId, quantity) => async (dispatch) => {
  const data = { quantity };

  try {
    await axiosInstance.put(`/shoppingcart/update/${itemId}`, data);
    const cartId = localStorage.getItem('cartId');

    return dispatch(getCart(cartId));
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to delete/empty the cart
 * @param {string} cartId
 * @returns {Function} dispatch an action
 */
export const emptyCart = cartId => async (dispatch) => {
  try {
    await axiosInstance.delete(`/shoppingcart/empty/${cartId}`);

    return dispatch(setEmptyCart());
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to move an item to cart
 * @param {number} itemId
 * @param {string} cartId
 * @returns {Function} dispatch an action
 */
export const moveToCart = (itemId, cartId) => async (dispatch) => {
  try {
    await axiosInstance.get(`/shoppingcart/moveToCart/${itemId}`);

    return dispatch(getCart(cartId));
  } catch (error) {
    return console.log(error.response);
  }
};

export default {
  setCart,
  setCartTotal,
  generateCartId,
  getCart,
  getCartTotal,
  addToCart,
  moveToCart,
  updateCart,
  emptyCart,
};
