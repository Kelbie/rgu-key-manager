import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import CSSModules from 'react-css-modules';

import Action from '../../components/Action/Action';
import Button from '../../components/Button/Button';
import HeaderButton from '../../components/Button/HeaderButton';
import Tabs from '../../components/Tabs/Tabs';
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import Table from '../../components/Table/Table';
import DropDown from '../../components/DropDown/DropDown';

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
          <div styleName="name">{this.props.id}</div>
          <div styleName="gap"></div>
          <div styleName="desc">Description of account</div>
          <div styleName="buttons">
            {this.props.buttons.slice(0,2).map(button => {
              return <HeaderButton variant="outlined" color="primary" text={button.text} icon={button.icon} />
            })}
            { this.props.buttons.length > 2 ? <DropDown text={"More"} icon={"expand_more"} items={this.props.buttons.slice(2, this.props.buttons.length)}/>
               : "" }
          </div>
        </div>
        <Tabs tabs={["Activity", "Keys"]} contents={[
            <ExpansionPanel />, <Table path="key" columns={["KEY ID", "TYPE", "DUPLICATES"]} rows={[["123(1)", "Door Key", "3"],["123(1)", "Door Key", "3"],["123(1)", "Door Key", "3"]]}/>
          ]} />
      </div>
    );
  }
}

export default CSSModules(InfoPage, styles);
