import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';
import KeyObject from '../KeyObject/KeyObject';
import Button from '../Button/Button';

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
    console.log(this);
    this.setState(this.props.routeParams.match.params);
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
        feed.push(<div className={`${styles.deselected} ${styles[tabs[i]]}`}>
          {content[tabs[i]]}
        </div>)
      }
    }
    return feed;
  }

  generateButtons(buttons) {
    var buttonsHTML = [];
    for (var i = 0; i < buttons.length; i++) {
      buttonsHTML.push(<Button icon={this.props.buttons[i].icon} text={this.props.buttons[i].text}/>)
    }
    return buttonsHTML;
  }

  render() {
    return (
      <div className={`${styles.page}`}>
        <div className={`${styles.general}`}>
          <div className={`${styles.photo} ${styles[this.props.type]}`}>{this.props.image}</div>
          <div className={`${styles.name}`}>{this.props.routeParams.match.url}</div>
          <div className={`${styles.gap}`}></div>
          <div className={`${styles.desc}`}>Description of account</div>
          <div className={`${styles.buttons}`}>
            {this.generateButtons(this.props.buttons)}
          </div>
        </div>
        <div className={`${styles.tabs}`}>
          {this.generateTabs(this.props.navigation)}
        </div>
        <div className={`${styles.feed}`}>
          {this.generateFeed(this.props.navigation)}
        </div>
      </div>
    );
  }
}

export default InfoPage;
