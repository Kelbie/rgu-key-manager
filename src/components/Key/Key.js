import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import styles from './Key.module.css';

class Key extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    var hash = sha256.create();
    hash.update(this.props.match.params.keyid);
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});
  }

  render() {
    return (
      <InfoPage type={"key"}
                routeParams={this.props}
                navigation={["history", "spares"]}
                image={<img width={420} height={420} src={"data:image/png;base64," + this.state.identicon } />}
                buttons={[{text: "transfer", icon: "send"}, {text: "lost", icon: "warning"}]} />
    );
  }
}

export default Key;
