import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Identicon from 'identicon.js';
import sha256 from 'js-sha256';

import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Layout Components
import InfoPage from '../../pages/InfoPage/InfoPage';

// Styles
import styles from './Key.module.scss';

class Key extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    var hash = sha256.create();
    hash.update(this.props.match.params.keyid);
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});

    this.getDetails()
  }

  async getDetails() {
    const keyRef = await firestore.collection('keys').doc("80(1)")

    try {
      const snap = await keyRef.get()
      const keyid = snap.data().keyid
      const holder = snap.data().holder.id
      const type = snap.data().type
      this.setState({"desc": {holder: holder, type: type}})

    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <InfoPage type={"key"}
                id={this.props.match.params.keyid}
                desc={this.state.desc}
                routeParams={this.props}
                image={<img width={420} height={420} src={"data:image/png;base64," + this.state.identicon } />}
                buttons={[{text: "Transfer", icon: "send", type: "dialog"}, {text: "Lost", icon: "warning", type: "dialog"}]} />
    );
  }
}

export default Key;
