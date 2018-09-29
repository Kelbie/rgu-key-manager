import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import styles from './Key.module.css';

class Key extends InfoPage {
  constructor() {
    super();
  }

  componentWillMount() {
    var hash = sha256.create();
    hash.update(this.props.match.params.keyid);
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});
  }

  render() {
    return (
      <div className={`${styles.key}`}>
        <div className={`${styles.general}`}>
          <div className={`${styles.photo}`}><img width={420} height={420} src={"data:image/png;base64," + this.state.identicon} /></div>
          <div className={`${styles.name}`}>{this.props.match.url}</div>
          <div className={`${styles.gap}`}></div>
          <div className={`${styles.desc}`}>Description of key</div>
          <div className={`${styles.buttons}`}>
            <div className={`${styles.button}`}>
              <MaterialIcon icon="send" />
              <span className={`${styles.buttonText}`}>Transfer</span>
            </div>
            <div className={`${styles.button}`}>
              <MaterialIcon icon="warning" />
              <span className={`${styles.buttonText}`}>Lost</span>
            </div>
          </div>
        </div>
        <div className={`${styles.tabs}`}>
          {this.generateTabs(["history"])}
        </div>
        <div className={`${styles.feed}`}>
          {this.generateFeed(["history"])}
        </div>
      </div>
    );
  }
}

export default Key;
