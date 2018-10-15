import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.module.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

// Router components
import Login from './components/Login/Login';
import User from './components/User/User';
import Key from './components/Key/Key';
import Place from './components/Place/Place';
import WelcomePage from './components/WelcomePage/WelcomePage';

// Graphical components
import Header from './components/Header/Header';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';

// Change default theme color
import {MuiThemeProvider ,createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple as primary color
    secondary: { main: "#651fff" }, // Deeppurple as secondary color
  },
});

class App extends Component {

  state = {
      auth: true,
  };

  render() {

    const { auth } = this.state;

    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

        {auth && (
          <div>
            <Router>
              <Switch>
                <Route path="/user/:username" component={User}/>
                <Route path="/key/:keyid" component={Key}/>
                <Route path="/place/:place" component={Place}/>
                <Route path="/login" component={Login} />
              </Switch>
            </Router>

            <CssBaseline/>
            <Header/>
            <NavigationDrawer/>
          </div>
        )}
        
        {!auth && (
          <div>
            <WelcomePage/>
          </div>
        )}
        </MuiThemeProvider>
      </div>
    );
  }
} export default App;
