import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import './User.css';

class User extends InfoPage {
  render() {
    return (
      <div className="user">
        <div className="general">
          <div className="photo"><img src={"http://robohash.org/" + this.state.username + "?bgset=bg2"} /></div>
          <div className="name">{this.props.match.url}</div>
          <div className="gap"></div>
          <div className="desc">Description of account</div>
          <div className="buttons">
            <div className="button">
              <MaterialIcon icon="folder" />
              <span className="buttonText">Manage Keys</span>
            </div>
          </div>
        </div>
        <div className="tabs">
          {this.generateTabs(["history", "keys"])}
        </div>
        <div className="feed">
          {this.generateFeed(["history", "keys"])}
        </div>
      </div>
    );
  }
}

export default User;
