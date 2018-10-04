import React, { Component } from 'react';

import styles from './Action.module.scss';

class Action extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.action}`}>
        <span className={`${styles.name}`}>
          <a href="/user/ShonaLilly">{this.props.author}</a>
        </span>
        <span className={`${styles.plain}`}>assigned</span>
        <span className={`${styles.key}`}>
          <a href={"/key/" + this.props.keyid + "(" + this.props.index + ")"}>{"key/" + this.props.keyid}({this.props.index})</a>
        </span>
        <span className={`${styles.plain}`}>to</span>
        <span className={`${styles.located}`}>
          <a href={"/user/" + this.props.receiver}>{this.props.receiver}</a> <a href={"/place/" + this.props.place}>({this.props.place})</a>
        </span>
        <span className={`${styles.time}`}>
          <a href="">{this.props.time}</a>
        </span>
      </div>
    );
  }
}

export default Action;
