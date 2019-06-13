import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import TopBar from '../components/Navigation/TopBar';

import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Shop from '../pages/shop/Shop';
import ShopItem from '../pages/shop/ShopItem';
import MainLanding from '../pages/landing/MainLanding';

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
  </div>
);

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <TopBar />
      <Toolbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/l" component={MainLanding} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop-item" component={ShopItem} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Routes;
