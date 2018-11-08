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

  async componentDidMount() {
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
          from: {
            text: row.from,
            type: "button",
            linkTo: "/user/" + row.from
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
          },
          actionType: {
            text: row.actionType
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
                    text: "Invite",
                    icon: "person_add",
                    type: "dialog"
                  }]
                }
        />);
    }
}

export default User;
