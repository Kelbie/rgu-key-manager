//remember to install react-tabs

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.Dashboard}`}>
      <Tabs>
        <TabList>
          <Tab>Home Page</Tab>
          <Tab>Manage Users</Tab>
          <Tab>Key Map</Tab>
        </TabList>

      <TabPanel>
        <h2>Home Page things go here</h2>
      </TabPanel>

      <TabPanel>
        <h2>Manage Users things go here</h2>
      </TabPanel>

      <TabPanel>
        <h2>Key Map goes here</h2>
      </TabPanel>
    </Tabs>
    </div>
    );
  }



}

export default Dashboard;
