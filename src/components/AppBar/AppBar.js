import React, { Component } from 'react';

import './AppBar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class mAppBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <AppBar className="app-bar">
            <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className="grow">
                    RGU Keys Manager
                </Typography>
                <Button className="loginButton" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
  }
}

export default mAppBar;