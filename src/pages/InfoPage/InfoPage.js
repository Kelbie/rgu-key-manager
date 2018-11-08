import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import CSSModules from 'react-css-modules';

// Graphics Components
import Invite from '../../popups/Invite/Invite';
import Lost from '../../popups/Lost/Lost';
import Found from '../../popups/Found/Found';
import Transfer from '../../popups/Transfer/Transfer';
import HeaderButton from '../../components/Button/HeaderButton';
import MiniButton from '../../components/Button/MiniButton';
import Tabs from '../../components/Tabs/Tabs';
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import Table from '../../components/Table/Table';
import DropDown from '../../components/DropDown/DropDown';

// Styles
import styles from './InfoPage.module.scss';

class InfoPage extends Component {
  state = {desc: {holder: undefined, type: undefined}, history: []};
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.setState({history: this.props.history})
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

    general.style.left = page.getBoundingClientRect().left + 32 + "px";
    general.style.top = "120px";
  }

  updateDimensions(event) {
    const general = document.getElementsByClassName(styles['general'])[0];
    const page = document.getElementsByClassName(styles['page'])[0];

    general.style.left = page.getBoundingClientRect().left + 32 + "px";
  }

  componentWillReceiveProps(p) {
    this.setState({"desc": p.desc})
    this.setState({"history": p.history})
    console.log(900, p)
  }

  render() {
    const mapping = {
      "Invite": <Invite {...this.props} />,
      "Transfer": <Transfer {...this.props} />,
      "Lost": <Lost {...this.props} />,
      "Found": <Found {...this.props} />
    }

    return (<div styleName="page">
      <div styleName="general">
        <div className={`${styles.photo} ${styles[this.props.type]}`}>{this.props.image}</div>
        <div styleName="name">{this.props.id}</div>
        <div styleName="desc">
          {this.state.desc.holder != "root" ? <><MiniButton variant="flat" color="primary" text={this.state.desc.holder} onClick={() => window.location.href="/user/" + this.state.desc.holder} /></>: this.props.type == "key" ? "No Owner": ""}
        </div>
        <div styleName="gap"></div>
        <div styleName="buttons">
          {
            this.props.buttons.slice(0, 2).map(button => {
              if (button.type == "dialog") {
                return mapping[button.text]
              } else {
                return <HeaderButton variant="outlined" color="primary" text={button.text} icon={button.icon}/>
              }

            })
          }
          {
            this.props.buttons.length > 2
              ? <DropDown text={"More"} icon={"expand_more"} items={this.props.buttons.slice(2, this.props.buttons.length)}/>
              : ""
          }
        </div>
      </div>
      <Tabs tabs={["Activity", "Keys"]} contents={[
          <ExpansionPanel history={this.props.history}/>,
          <Table path="key" columns={["KEY ID", "TYPE", "DUPLICATES"]} rows={[
              [
                {
                  text: "123(1)",
                  type: "button",
                  linkTo: "/key/123(1)"
                }, {
                  text: "Door Key",
                  type: "plain"
                }, {
                  text: 2,
                  type: "plain"
                }
              ],
              [
                {
                  text: "123(2)",
                  type: "button",
                  linkTo: "/key/123(2)"
                }, {
                  text: "Door Key",
                  type: "plain"
                }, {
                  text: 2,
                  type: "plain"
                }
              ],
              [
                {
                  text: "123(3)",
                  type: "button",
                  linkTo: "/key/123(3)"
                }, {
                  text: "Door Key",
                  type: "plain"
                }, {
                  text: 2,
                  type: "plain"
                }
              ]
            ]}/>
        ]}/>
    </div>);
  }
}

export default CSSModules(InfoPage, styles);
