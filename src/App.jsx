import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/routes';
import store from './reduxStore';
import initShoppingCart from './utils/shoppinCart/init';
import initAuthCustomer from './utils/customer/initCustomer';

initShoppingCart(store);
initAuthCustomer();

/**
 * @description Starting Application with the routes
 * @returns {JSX.Element} jsx
 */
const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
