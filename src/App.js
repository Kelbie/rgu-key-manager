import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import User from './components/User/User';
import Key from './components/Key/Key';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="app">
      <Router>
        <Switch>
          <Route path="/user/:username" component={User}/>
          <Route path="/key/:keyid" component={Key}/>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>);
  }
}

export default App;
