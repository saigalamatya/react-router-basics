import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import About from './navbar/About';
import Contact from './navbar/Contact';

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Tabs>
          <Tab icon={<FontIcon className="muidocs-icon-action-home"><Link to="/home" style ={{textDecoration: "none"}} >Home</Link></FontIcon>}
          />
          <Tab icon={<FontIcon className="material-icons"><Link to="/about" style ={{textDecoration: "none"}}>About</Link></FontIcon>}
          />
          <Tab icon={<FontIcon className="material-icons"><Link to="/contact" style ={{textDecoration: "none"}}>Contact</Link></FontIcon>}
          />
        </Tabs>
        <h1>This is Home Page!</h1>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;