import axiosInstance, { setAuthToken } from '../../../utils/axiosInstance';

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
    const { accessToken } = await axiosInstance.post('/customers', data);

    return setAuthToken(accessToken);
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
    const { accessToken } = await axiosInstance.post('/customers/login', data);
    console.log(accessToken);

    return setAuthToken(accessToken);
  } catch (error) {
    console.log(error);

    return console.log(error.response);
  }
};

export default {
  registerCustomer,
  loginCustomer,
};
