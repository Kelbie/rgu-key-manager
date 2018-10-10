import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import User from './components/User/User';
import Key from './components/Key/Key';
import Place from './components/Place/Place';
import Dashboard from './components/Dashboard/Dashboard';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="app">
      <Router>
        <Switch>
          <Route path="/user/:username" component={User}/>
          <Route path="/key/:keyid" component={Key}/>
          <Route path="/place/:place" component={Place}/>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>);
  }
}

export default App;
