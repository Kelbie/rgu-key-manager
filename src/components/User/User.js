import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import styles from './User.module.css';
import '../InfoPage/InfoPage.module.css';

class User extends InfoPage {
  render() {
    return (
      <div className={`${styles.user}`}>
        <div className={`${styles.general}`}>
          <div className={`${styles.photo}`}><img src={"http://robohash.org/" + this.state.username + "?bgset=bg2"} /></div>
          <div className={`${styles.name}`}>{this.props.match.url}</div>
          <div className={`${styles.gap}`}></div>
          <div className={`${styles.desc}`}>Description of account</div>
          <div className={`${styles.buttons}`}>
            <div className={`${styles.button}`}>
              <MaterialIcon icon="folder" />
              <span className={`${styles.buttonText}`}>Manage Keys</span>
            </div>
            <div className={`${styles.button}`}>
              <MaterialIcon icon="group_add" />
              <span className={`${styles.buttonText}`}>Invite</span>
            </div>
          </div>
        </div>
        <div className={`${styles.tabs}`}>
          {this.generateTabs(["history", "keys"])}
        </div>
        <div className={`${styles.feed}`}>
          {this.generateFeed(["history", "keys"])}
        </div>
      </div>
    );
  }
}

export default User;
