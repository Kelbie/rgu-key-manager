import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.Dashboard}`}>
        <h1>Dashboard</h1>
      </div>
    );
  }



}

export default Dashboard;
