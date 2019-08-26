import JWT from 'jsonwebtoken';
import axiosInstance, { setAuthHeader } from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description method to set a users token in the store, axios header and in localStorage
 * @param {string} token
 * @returns {object} reducer object
 */
export const setAuthToken = (token) => {
  setAuthHeader(token, 'user-key');
  const { name } = JWT.decode(token.split(' ')[1]);

  console.log(token, name);

  return {
    type: types.SET_AUTH_TOKEN,
    payload: {
      token,
      name,
    },
  };
};

export const setAuthUser = token => ({
  type: types.SET_DECODED_USER,
  payload: token,
});

/**
 * @description A thunk action to register a new customer
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns {Function} dispatch an action
 */
export const registerCustomer = (name, email, password) => async (dispatch) => {
  const data = {
    name,
    email,
    password,
  };
  try {
    const {
      data: { accessToken },
    } = await axiosInstance.post('/customers', data);

    return dispatch(setAuthToken(accessToken));
  } catch (error) {
    console.log(error);
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to login a customer
 * @param {string} email
 * @param {string} password
 * @returns {Function} dispatch an action
 */
export const loginCustomer = (email, password) => async (dispatch) => {
  const data = {
    email,
    password,
  };
  try {
    const { data: accessToken } = await axiosInstance.post('/customers/login', data);

    return dispatch(setAuthToken(accessToken));
  } catch (error) {
    console.log(error);

    return console.log(error.response);
  }
};

export default {
  registerCustomer,
  loginCustomer,
};
