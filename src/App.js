import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Router components
import Login from './components/Login/Login';
import User from './components/User/User';
import Key from './components/Key/Key';
import Place from './components/Place/Place';
import Dashboard from './components/Dashboard/Dashboard';

// Graphical components
import AppBar from './components/AppBar/AppBar'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <Router>
          <Switch>
            <Route path="/user/:username" component={User}/>
            <Route path="/key/:keyid" component={Key}/>
            <Route path="/place/:place" component={Place}/>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>

        <Dashboard/>
      </div>
    );
  }
}

export default App;
