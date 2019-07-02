import axiosInstance from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description An action to setCategories in the redux store
 * @param {array} categories
 * @returns {object} categories to set
 */
const setCategories = categories => ({
  type: types.SET_CATEGORIES,
  payload: categories,
});

/**
 * @description An action to fetch categories
 * @param {number} pageNo
 * @param {number} limit
 * @returns {Function} dispatch
 */
const getCategories = (pageNo = 1, limit = 10) => async (dispatch) => {
  try {
    const categories = await axiosInstance.get(`/categories?page=${pageNo}&limit=${limit}`);

    return dispatch(setCategories(categories.data.rows));
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @description A thunk action to fetch categories by a departmentId
 * @param {number} departmentId
 * @returns {Function} dispatch
 */
export const getCategoriesByDepartmentId = departmentId => async (dispatch) => {
  try {
    const categories = await axiosInstance.get(`/categories/indepartment/${departmentId}`);

    return dispatch(setCategories(categories.data));
  } catch (error) {
    return console.log(error);
  }
};

export default {
  setCategories,
  getCategories,
  getCategoriesByDepartmentId,
};
