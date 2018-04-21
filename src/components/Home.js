import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './navbar/About';
import Contact from './navbar/Contact';

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Tabs>
          <Tab icon={<FontIcon className="muidocs-icon-action-home"/>}/>
          <Tab icon={<FontIcon className="material-icons">contacts</FontIcon>}
               label="Contacts"
          />
          <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}
               label="Settings"
          />
        </Tabs>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;