import types from './types';

const initialState = {
  total: 0.0,
  cartItems: [],
  cartId: '',
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case types.SET_CART_ID:
      return {
        ...state,
        cartId: action.payload,
      };

    case types.SET_CART_TOTAL:
      return {
        ...state,
        total: action.payload,
      };

    case types.EMPTY_CART:
      return initialState;

    default:
      return state;
  }
};

export default shoppingCartReducer;
