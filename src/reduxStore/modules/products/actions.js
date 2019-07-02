import axiosInstance from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description An action to setAllProducts in the redux store
 * @param {array} products
 * @returns {object} products to set accompanied by the action type
 */
export const setAllProducts = products => ({
  type: types.SET_ALL_PRODUCTS,
  payload: products,
});

/**
 * @description An action to set specific Products in the redux store
 * @param {array} products
 * @returns {object} products to set accompanied by the action type
 */
export const setViewProducts = products => ({
  type: types.SET_VIEW_PRODUCTS,
  payload: products,
});
/**
 * @description An action to clear the Products in view in the redux store
 * @returns {object} products to set accompanied by the action type
 */
export const clearViewProducts = () => ({
  type: types.CLEAR_VIEW_PRODUCTS,
});

/**
 * @description An action to set the current inview product to the redux store
 * @param {object} product
 * @returns {object} products to set accompanied by the action type
 */
export const setCurrentProduct = product => ({
  type: types.SET_CURRENT_PRODUCT,
  payload: product,
});

/**
 * @description An action to set the searched product to the redux store
 * @param {array} products
 * @returns {object} products to set accompanied by the action type
 */
export const setSearchedProducts = products => ({
  type: types.SET_SEARCHED_PRODUCTS,
  payload: products,
});

/**
 * @description A thunk action to fetch paginated list of products
 * @param {number} pageNo
 * @param {number} limit
 * @param {number} descriptionLength
 * @returns {Function} dispatch an action
 */
export const getProducts = (pageNo = 1, limit = 10, descriptionLength = 50) => async (dispatch) => {
  try {
    const products = await axiosInstance.get(
      `/products?page=${pageNo}&limit=${limit}&descriptionLength=${descriptionLength}`,
    );

    return dispatch(setViewProducts(products.data.rows));
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @description A thunk action to search products given a query string
 * @param {string} searchQuery
 * @param {number} pageNo
 * @param {number} limit
 * @param {number} descriptionLength
 * @returns {Function} dispatch an action
 */
export const getSearchProducts = (
  searchQuery,
  pageNo = 1,
  limit = 10,
  descriptionLength = 20,
) => async (dispatch) => {
  try {
    const products = await axiosInstance.get(
      `/products/search?query_string=${searchQuery}&page=${pageNo}&limit=${limit}&descriptionLength=${descriptionLength}`,
    );

    return dispatch(setSearchedProducts(products.data.rows));
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @description A thunk action to fetch all products
 * @returns {Function} dispatch an action
 */
export const getAllProducts = () => async (dispatch) => {
  try {
    const products = await axiosInstance.get('/products');

    return dispatch(setAllProducts(products.data.rows));
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @description A thunk action to fetch a product given it's id
 * @param {number} productId
 * @returns {Function} dispatch an action
 */
export const getProductById = productId => async (dispatch) => {
  try {
    const products = await axiosInstance.get(`/products/${productId}`);

    return dispatch(setCurrentProduct(products.data));
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @description A thunk action to fetch products given the department Id
 * @param {number} departmentId
 * @param {number} pageNo
 * @param {number} limit
 * @param {number} descriptionLength
 * @returns {Function} dispatch
 */
export const getProductsByDepartmentId = (
  departmentId,
  pageNo = 1,
  limit = 10,
  descriptionLength = 50,
) => async (dispatch) => {
  try {
    const categories = await axiosInstance.get(
      `/products/inDepartment/${departmentId}?page=${pageNo}&limit=${limit}&descriptionLength=${descriptionLength}`,
    );

    return dispatch(setViewProducts(categories.data.rows));
  } catch (error) {
    console.log(error);
    return console.log(error);
  }
};

/**
 * @description A thunk action to fetch products given the category Id
 * @param {number} categoryId
 * @param {number} pageNo
 * @param {number} limit
 * @param {number} descriptionLength
 * @returns {Function} dispatch
 */
export const getProductsByCategoryId = (
  categoryId,
  pageNo = 1,
  limit = 10,
  descriptionLength = 50,
) => async (dispatch) => {
  try {
    const categories = await axiosInstance.get(
      `/products/inCategories/${categoryId}?page=${pageNo}&limit=${limit}&descriptionLength=${descriptionLength}`,
    );

    return dispatch(setViewProducts(categories.data));
  } catch (error) {
    return console.log(error);
  }
};

export default {
  setAllProducts,
  setViewProducts,
  getProducts,
  getProductsByCategoryId,
  getProductsByDepartmentId,
};
