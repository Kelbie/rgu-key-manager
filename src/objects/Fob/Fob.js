import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

// Layout Components
import InfoPage from '../../pages/InfoPage/InfoPage';

// Styles
import styles from './Fob.module.scss';

class Fob extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    var hash = sha256.create();
    hash.update(this.props.match.params.fobid);
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});
  }

  render() {
    return (
      <InfoPage type={"fob"}
                id={this.props.match.params.fobid}
                routeParams={this.props}
                navigation={["history", "spares"]}
                image={<img width={420} height={420} src={"data:image/png;base64," + this.state.identicon } />}
                buttons={[{text: "Transfer", icon: "send"}, {text: "Reprogram", icon: "settings_backup_restore"}, {text: "lost", icon: "warning"}]} />
    );
  }
}

export default Fob;
