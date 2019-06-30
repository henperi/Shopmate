import types from './types';

const initialState = {
  allProducts: [],
  viewableProducts: [],
  searchedProducts: [],
  currentProduct: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VIEW_PRODUCTS:
      return {
        ...state,
        viewableProducts: action.payload,
      };

    case types.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case types.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: { ...action.payload },
      };

    case types.SET_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: { ...action.payload },
      };

    case types.CLEAR_VIEW_PRODUCTS:
      return {
        ...state,
        viewableProducts: [],
      };

    default:
      return state;
  }
};

export default productsReducer;
