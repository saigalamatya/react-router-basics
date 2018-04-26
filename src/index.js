import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import Header from './components/Header';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';
import PageNotFound from './components/PageNotFound';

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <App />
  ,
  document.getElementById('root'));
registerServiceWorker();
