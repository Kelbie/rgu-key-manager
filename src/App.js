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

class App extends Component {

  state = {
      auth: false,
  };

  render() {

    const { auth } = this.state;

    return (
      <div className="app">
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
      </div>
    );
  }
} export default App;
