import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import Action from '../Action/Action';

import InfoPage from '../InfoPage/InfoPage';

import styles from './User.module.css';
import '../InfoPage/InfoPage.module.css';

class User extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <InfoPage type={"user"}
                routeParams={this.props}
                navigation={["history", "keys"]}
                image={<img src={"http://robohash.org/" + this.props.match.params.username + "?bgset=bg2"} />}
                buttons={[{text: "Manage Keys", icon: "folder"}, {text: "invite", icon: "group_add"}]}
                />

    );
  }
}

export default User;
