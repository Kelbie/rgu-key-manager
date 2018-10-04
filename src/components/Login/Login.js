import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styles from './Login.module.scss';

class Login extends Component {
  render() {
    return (
      <div className={`${styles.login}`}>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default Login;
