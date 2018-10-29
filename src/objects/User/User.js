import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';

import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Layout Components
import InfoPage from '../../pages/InfoPage/InfoPage';

// Styles
import styles from './User.module.scss';

class User extends Component {
  state = {history: []}
  constructor() {
    super();
  }

  componentWillMount() {
    this.getHistory()
  }

  async getHistory() {
    const historyRef = await firestore.collection('history')
      .where('to', '==', this.props.match.params.username)

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
      })
    } catch (e) {
      console.log(e)
    }

    const historyRef2 = await firestore.collection('history')
      .where('from', '==', firestore.doc("/users/" + this.props.match.params.username))

    try {
      const snap = await historyRef2.get()
      snap.forEach(row => {
        row = row.data()
        console.log(777, row)
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
      })
    } catch (e) {
      console.log(e)
    }

    this.setState({
      history: this.state.history.sort(function(a, b) {
        return new Date(b.time.text) > new Date(a.time.text);
      })
    })
  }

  render() {
    return (
      <InfoPage type={"user"}
                routeParams={this.props}
                desc={"awd"}
                history={this.state.history}
                id={this.props.match.params.username}
                image={<img src={"http://robohash.org/" + this.props.match.params.username + "?bgset=bg2"}/>}
                buttons={[
                  {
                    text: "Manage Keys",
                    icon: "vpn_key"
                  }, {
                    text: "Invite",
                    icon: "person_add",
                    type: "dialog"
                  }, {
                    text: "test",
                    icon: "person_add"
                  }]
                }
        />);
    }
}

export default User;
