import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

import styles from './InfoPage.module.css';

class InfoPage extends Component {
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
          <span id={tabs[i]} className={`${styles.tab} + ${styles.selected}`} onClick={this.tabClicked}>
            {tabs[i]}
            <div className={`${styles.underline}`}></div>
          </span>
        )
      } else {
        tabsArray.push(
          <span id={tabs[i]} className={`${styles.tab}`} onClick={this.tabClicked}>
            {tabs[i]}
            <div className={`${styles.underline}`}></div>
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
          var content = [
            <Action author={"ShonaLilly"} keyid={"80"} index={1} isLost={false} place={"Cupboard"} receiver={"EMatheson"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"80"} index={2} isLost={false} place={"Cupboard"} receiver={"ShonaLilly"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"11254"} index={1} isLost={false} place={"GREEN_ROOM_CB"} receiver={"ShonnaLilly"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"SK54"} index={1} isLost={false} place={"IDEAS_MASTER"} receiver={"ShonaLilly"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"PQ858"} index={1} isLost={false} place={"KITCHEN_CB"} receiver={"VDawod"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"D3108"} index={1} isLost={false} place={"N329"} receiver={"VDawod"} time={"4 hours ago"}/>,
            <Action author={"ShonaLilly"} keyid={"D3062"} index={1} isLost={false} place={"N332"} receiver={"VDawod"} time={"4 hours ago"}/>,
          ]
          break;
        case "keys":
          var content = ""
          break
        default:
          var content = ""
      }
      if (tabs[i] == this.state.selected) {
        feed.push(
          <div className={`${styles.selected}`}>
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

export default InfoPage;
