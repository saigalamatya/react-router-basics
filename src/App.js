import React, { Component } from 'react';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import TableExampleSimple from './components/Table';

//Components
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/navbar/About';

class App extends Component {
  render() { 
    return (
      <MuiThemeProvider>
        <div>
          <Login />
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
