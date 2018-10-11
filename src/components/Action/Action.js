import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Action.module.scss';

class Action extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div styleName="action">
        <span styleName="name">
          <a href="/user/ShonaLilly">{this.props.author}</a>
        </span>
        <span styleName="plain">assigned</span>
        <span styleName="key">
          <a href={"/key/" + this.props.keyid + "(" + this.props.index + ")"}>{"key/" + this.props.keyid}({this.props.index})</a>
        </span>
        <span styleName="plain">to</span>
        <span styleName="located">
          <a href={"/user/" + this.props.receiver}>{this.props.receiver}</a> <a href={"/place/" + this.props.place}>({this.props.place})</a>
        </span>
        <span styleName="time">
          <a href="">{this.props.time}</a>
        </span>
      </div>
    );
  }
}

export default CSSModules(Action, styles);
