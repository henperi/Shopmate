import types from './types';

const initialState = {
  authToken: '',
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload.token,
        user: {
          ...state.user,
          name: action.payload.name,
        },
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default authReducer;
