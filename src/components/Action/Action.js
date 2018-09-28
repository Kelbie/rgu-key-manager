import React, { Component } from 'react';

import './Action.css';

class Action extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="action">
        <span className="name">
          <a href="">ShonaLilly</a>
        </span>
        <span className="plain">assigned</span>
        <span className="key">
          <a href="">key/0359</a>
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

export default Action;
