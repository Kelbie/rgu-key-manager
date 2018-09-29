import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Action.css';

class Action extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='action'>
        <span className="name">
          <a href="/user/ShonaLilly">ShonaLilly</a>
        </span>
        <span className="plain">assigned</span>
        <span className="key">
          <a href="/key/0359(1)">key/0359(1)</a>
        </span>
        <span className="plain">as</span>
        <span className="location">
          <a href="">lost</a>
        </span>
        <span className="time">
          <a href="">4 hours ago</a>
        </span>
      </div>
    );
  }
}

export default CSSModules(Action, styles);
