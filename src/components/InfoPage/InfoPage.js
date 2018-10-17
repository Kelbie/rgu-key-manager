import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import CSSModules from 'react-css-modules';

import Action from '../Action/Action';
import KeyObject from '../KeyObject/KeyObject';
import Button from '../Button/Button';

import HeaderButton from '../Button/HeaderButton';
import Tabs from '../Tabs/Tabs';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import Table from '../Table/Table';

import styles from './InfoPage.module.scss';

class InfoPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div styleName="page">
        <div styleName="general">
          <div className={`${styles.photo} ${styles[this.props.type]}`}>{this.props.image}</div>
          <div styleName="name">{this.props.routeParams.match.url}</div>
          <div styleName="gap"></div>
          <div styleName="desc">Description of account</div>
          <div styleName="buttons">
            {this.props.buttons.map(button => {
              return <HeaderButton text={button.text} icon={button.icon} />
            })}
          </div>
        </div>
        <Tabs tabs={["Activity", "Keys"]} contents={[
            <ExpansionPanel />, <Table columns={["KEY ID", "TYPE", "DUPLICATES"]} rows={[{"keyId": "123(1)", "type": "Door Key", "duplicates": "3"},{"keyId": "123(2)", "type": "Door Key", "duplicates": "3"},{"keyId": "123(3)", "type": "Door Key", "duplicates": "3"}]}/>
          ]} />
      </div>
    );
  }
}

export default CSSModules(InfoPage, styles);
