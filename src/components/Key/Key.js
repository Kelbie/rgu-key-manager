import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import './Key.css';

class Key extends InfoPage {
  constructor() {
    super();
    console.log(this.state);
  }

  componentWillMount() {
    var hash = sha256.create();
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});
  }

  render() {
    return (
      <div className="key">
        <div className="general">
          <div className="photo"><img width={420} height={420} src={"data:image/png;base64," + this.state.identicon} /></div>
          <div className="name">{this.props.match.url}</div>
          <div className="gap"></div>
          <div className="desc">Description of account</div>
          <div className="buttons">
            <div className="button">
              <MaterialIcon icon="send" />
              <span className="buttonText">Transfer</span>
            </div>
            <div className="button">
              <MaterialIcon icon="warning" />
              <span className="buttonText">Lost</span>
            </div>
          </div>
        </div>
        <div className="tabs">
          {this.generateTabs(["history"])}
        </div>
        <div className="feed">
          {this.generateFeed(["history"])}
        </div>
      </div>
    );
  }
}

export default Key;
