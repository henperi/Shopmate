import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TopBar from '../components/Navigation/TopBar';

import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Shop from '../pages/shop/Shop';
import ShopItem from '../pages/shop/ShopItem';
import MainLanding from '../pages/landing/MainLanding';
import Checkout from '../pages/checkout/Checkout';

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
  </div>
);

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <TopBar />

      <Switch>
        <Route exact path="/" component={MainLanding} />
        <Route exact path="/l" component={Home} />
        <Route exact path="/shop/:name/:id" component={Shop} />
        <Route exact path="/shop-item/:itemId" component={ShopItem} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Routes;
