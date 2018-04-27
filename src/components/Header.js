import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            onLeftIconButtonClick={() => this.toggleSidebar()}
          />
          <Drawer open={this.state.sidebarOpen}
            docked={false}
            onRequestChange={
              () => this.toggleSidebar()
            }
          >
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }

  toggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

}

export default Header;