import React, { Component } from 'react';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import TableExampleSimple from './components/Table';

//Components
import Header from './components/Header';
import LoginForm from './components/Login'
import Home from './components/Home';

import About from './components/navbar/About';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
