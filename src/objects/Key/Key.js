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
  state = {history: []}
  constructor() {
    super();
  }

  componentWillMount() {
    var hash = sha256.create();
    hash.update(this.props.match.params.keyid);
    var data = new Identicon(hash.hex(), 420).toString();
    this.setState({"identicon": data});

    this.getDetails()
    this.getHistory()
  }

  async getDetails() {
    const keyRef = await firestore.collection('keys').doc(this.props.match.params.keyid)

    try {
      const snap = await keyRef.get()
      const keyid = snap.data().keyid
      const holder = snap.data().holder.id
      const type = snap.data().type
      const opens = snap.data().opens.id
      const stored = snap.data().stored.id
      const lost = snap.data().lost
      this.setState({"desc": {holder: holder, type: type, opens: opens, stored: stored, lost: lost}})

    } catch(e) {
      console.log(e);
    }
  }

  async getHistory() {
    const historyRef = await firestore.collection('history').where('keyid', '==', this.props.match.params.keyid)

    try {
      const snap = await historyRef.get()
      snap.forEach(row => {
        row = row.data()
        this.state.history.push({
          author: {
            text: row.author,
            type: "button",
            linkTo: "/user/" + row.author
          },
          keyid: {
            text: row.keyid,
            type: "button",
            linkTo: "/key/" + row.keyid
          },
          from: {
            text: row.from.id,
            type: "button",
            linkTo: "/user/" + row.from.id
          },
          to: {
            text: row.to,
            type: "button",
            linkTo: "/user/" + row.to
          },
          comment: {
            text: row.comment
          },
          time: {
            text: row.time
          }
        })
        this.setState({history: this.state.history.sort(function(a, b) {
          return new Date(b.time.text) > new Date(a.time.text);
        })})
    })

    console.log(1011, this.state.history)


    } catch(e) {
      console.log(999, e);
    }
  }

  render() {
    return (
      <InfoPage type={"key"}
                id={this.props.match.params.keyid}
                desc={this.state.desc}
                history={this.state.history}
                routeParams={this.props}
                image={<img width={420} height={420} src={"data:image/png;base64," + this.state.identicon } />}
                buttons={[{text: "Transfer", icon: "send", type: "dialog"}, {text: "Lost", icon: "warning", type: "dialog"}]} />
    );
  }
}

export default Key;
