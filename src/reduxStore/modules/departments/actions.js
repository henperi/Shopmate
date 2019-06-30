import axiosInstance from '../../../utils/axiosInstance';
import types from './types';

/**
 * @description An action to setDepartments in the redux store
 * @param {array} departments
 * @returns {object} departments to set accompanied by the action type
 */
export const setDepartments = departments => ({
  type: types.SET_DEPARTMENTS,
  payload: departments,
});

/**
 * @description A thunk action to fetch departments
 * @returns {Function} dispatch an action
 */
export const getDepartments = () => async (dispatch) => {
  try {
    const departments = await axiosInstance.get('/departments');

    return dispatch(setDepartments(departments.data));
  } catch (error) {
    return dispatch();
  }
};

export default {
  setDepartments,
  getDepartments,
};
