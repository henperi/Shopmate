import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import departmentsReducer from './departments/reducer';
import productsReducer from './products/reducer';
import reviewsReducer from './reviews/reducer';
import shoppingCartReducer from './shoppinCart/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  departments: departmentsReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cart: shoppingCartReducer,
  auth: authReducer,
});

export default rootReducer;
