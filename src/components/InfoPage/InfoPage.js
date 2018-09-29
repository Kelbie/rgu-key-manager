import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

class Obj extends Component {
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
    this.setState(this.props.match.params);
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
}

export default Obj;
