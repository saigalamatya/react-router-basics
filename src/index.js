import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';

const routes = (
  <BrowserRouter>
  <div>
    <Route  path="/" component={ Home } />
    <Route  path="/about" component={ About } />
    <Route  path="/contact" component={ Contact } />
  </div>
  </BrowserRouter>
);

ReactDOM.render(
    routes
,
  document.getElementById('root'));
registerServiceWorker();
