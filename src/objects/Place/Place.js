import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Trianglify from 'trianglify'; // only needed in node.js

// Layout Components
import InfoPage from '../../pages/InfoPage/InfoPage';

// Styles
import styles from './Place.module.scss';

class Place extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    var pattern = Trianglify({width: 200, height: 200, seed: this.props.match.params.place});
    this.state = {"pattern": pattern.png()}
  }

  render() {
    return (
      <InfoPage type={"place"}
                routeParams={this.props}
                navigation={["history", "spares", "stored"]}
                image={<img width={420} height={420} src={ this.state.pattern } />}
                buttons={[{text: "Manage Keys", icon: "folder"}]}
                />

    );
  }
}

export default Place;
