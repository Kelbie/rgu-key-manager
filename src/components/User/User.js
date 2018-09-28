import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

import './User.css';

class User extends Component {
  constructor() {
    super();

    this.tabClicked = this.tabClicked.bind(this)
    this.generateTabs = this.generateTabs.bind(this)
    this.generateFeed = this.generateFeed.bind(this)
    this.state = {selected: ["history"]};
  }

  tabClicked(obj) {
    this.setState({selected: obj.target.id});
  }

  componentWillMount() {
    this.setState(this.props.routeParams.match.params);
  }

  generateTabs(tabs) {
    var tabsArray = [];
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] == this.state.selected) {
        tabsArray.push(
          <span id={tabs[i]} className="tab selected" onClick={this.tabClicked}>
            {tabs[i]}
            <div className="underline"></div>
          </span>
        )
      } else {
        tabsArray.push(
          <span id={tabs[i]} className="tab" onClick={this.tabClicked}>
            {tabs[i]}
            <div className="underline"></div>
          </span>
        )
      }
    }

    return tabsArray;
  }

  generateFeed(tabs) {
    var feed = [];
    for (var i = 0; i < tabs.length; i++) {
      switch (tabs[i]) {
        case "history":
          var content = <Action />
          break;
        case "keys":
          var content = ""
          break
        default:
          var content = ""
      }
      if (tabs[i] == this.state.selected) {
        feed.push(
          <div className={"selected"}>
            {content}
            {content}
            {content}
          </div>
        );
      } else {
        feed.push(
          <div></div>
        );
      }
    }
    return feed;
  }

  render() {
    return (
      <div className="user">
        <div className="general">
          <div className="photo"><img src={"http://robohash.org/" + this.state.username + "?bgset=bg2"} /></div>
          <div className="name">{this.props.routeParams.match.url}</div>
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
