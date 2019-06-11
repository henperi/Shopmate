import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import TopBar from '../components/Navigation/TopBar';

import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Shop from '../pages/shop/Shop';

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
        <Route exact path="/shop" component={Shop} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Routes;
