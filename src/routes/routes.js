import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/navbar/About';
import Contact from '../components/navbar/Contact';
import PageNotFound from '../components/PageNotFound';

const Routes = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/home" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
</BrowserRouter>
);

export default Routes;