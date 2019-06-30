import types from './types';

const departmentsReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_DEPARTMENTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default departmentsReducer;
