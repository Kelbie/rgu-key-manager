import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import CSSModules from 'react-css-modules';

// Graphics Components
import Invite from '../../popups/Invite/Invite';
import HeaderButton from '../../components/Button/HeaderButton';
import Tabs from '../../components/Tabs/Tabs';
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import Table from '../../components/Table/Table';
import DropDown from '../../components/DropDown/DropDown';

// Styles
import styles from './InfoPage.module.scss';

class InfoPage extends Component {
  state = {};
  constructor() {
    super();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.updateDimensions);
    this.handleScroll();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.updateDimensions);
  }

  handleScroll(event) {
    const general = document.getElementsByClassName(styles['general'])[0];
    const tabs = document.getElementById('tabs');
    const photo = document.getElementsByClassName(styles['photo'])[0];
    const page = document.getElementsByClassName(styles['page'])[0];

    general.style.left=page.getBoundingClientRect().left + 32 + "px";
    general.style.top="120px";
  }

  updateDimensions(event) {
    const general = document.getElementsByClassName(styles['general'])[0];
    const page = document.getElementsByClassName(styles['page'])[0];

    general.style.left=page.getBoundingClientRect().left + 32 + "px";
  }

  render() {
    return (
      <div styleName="page">
        <div styleName="general">
          <div className={`${styles.photo} ${styles[this.props.type]}`}>{this.props.image}</div>
          <div styleName="name">{this.props.id}</div>
          <div styleName="gap"></div>
          <div styleName="buttons">
            {this.props.buttons.slice(0,2).map(button => {
              if (button.type == "dialog") {
                return <Invite {...this.props}/>
              } else {
                return <HeaderButton variant="outlined" color="primary" text={button.text} icon={button.icon}/>
              }


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
