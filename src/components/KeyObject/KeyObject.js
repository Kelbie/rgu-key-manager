import React, { Component } from 'react';

import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

import styles from './KeyObject.module.css';

class KeyObject extends Component {
  constructor() {
    super();

  }

  componentWillMount() {
      var hash = sha256.create();
      hash.update('123(1)');
      var data = new Identicon(hash.hex(), 420).toString();
      this.setState({"identicon": data});
    }

  render() {
    return (
      <div className={`${styles.keyObject}`}>
        <img width={420} height={420} src={"data:image/png;base64," + this.state.identicon} />
        <div className={`${styles.label}`}>KEYID</div>
        <div className={`${styles.value}`}><a href="/key/123(1)">123(1)</a></div>
        <div className={`${styles.label}`}>TYPE</div>
        <div className={`${styles.value}`}><a href="/key/123(1)">Door Key</a></div>
        <div className={`${styles.label}`}># OF SPARES</div>
        <div className={`${styles.value}`}><a href="/key/123(1)#spares" className={`${styles.spares}`}>123</a></div>
      </div>
    );
  }
}

export default KeyObject;
