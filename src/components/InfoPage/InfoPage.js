import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';
import KeyObject from '../KeyObject/KeyObject';

import styles from './InfoPage.module.css';

class InfoPage extends Component {
  constructor() {
    super();

    this.tabClicked = this.tabClicked.bind(this)
    this.generateTabs = this.generateTabs.bind(this)
    this.generateFeed = this.generateFeed.bind(this)
    this.state = {
      selected: ["history"]
    };
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
        tabsArray.push(<span id={tabs[i]} className={`${styles.tab} + ${styles.selected}`} onClick={this.tabClicked}>
          {tabs[i]}
          <div className={`${styles.underline}`}></div>
        </span>)
      } else {
        tabsArray.push(<span id={tabs[i]} className={`${styles.tab}`} onClick={this.tabClicked}>
          {tabs[i]}
          <div className={`${styles.underline}`}></div>
        </span>)
      }
    }

    return tabsArray;
  }

  generateFeed(tabs) {
    var feed = [];
    var content = {
      history: [
        <Action author={"ShonaLilly"} keyid={"80"} index={1} isLost={false} place={"Cupboard"} receiver={"EMatheson"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"80"} index={2} isLost={false} place={"Cupboard"} receiver={"ShonaLilly"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"11254"} index={1} isLost={false} place={"GREEN_ROOM_CB"} receiver={"ShonnaLilly"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"SK54"} index={1} isLost={false} place={"IDEAS_MASTER"} receiver={"ShonaLilly"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"PQ858"} index={1} isLost={false} place={"KITCHEN_CB"} receiver={"VDawod"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"D3108"} index={1} isLost={false} place={"N329"} receiver={"VDawod"} time={"4 hours ago"}/>,
        <Action author={"ShonaLilly"} keyid={"D3062"} index={1} isLost={false} place={"N332"} receiver={"VDawod"} time={"4 hours ago"}/>
      ],
      keys: [
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>,
        <KeyObject/>
      ]
    }
    for (var i = 0; i < tabs.length; i++) {
      console.log(tabs[i], this.state.selected);
      if (tabs[i] == this.state.selected) {
        feed.push(<div className={`${styles.selected} ${styles[tabs[i]]}`}>
          {content[tabs[i]]}
        </div>)
      } else {
        feed.push(<div className={`${styles.deselected}`}>
          {content[tabs[i]]}
        </div>)
      }
    }
    return feed;
  }
}

export default InfoPage;
