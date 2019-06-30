import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducer';
import departmentsReducer from './departments/reducer';
import productsReducer from './products/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  departments: departmentsReducer,
  products: productsReducer,
});

export default rootReducer;
