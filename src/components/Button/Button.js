import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import CSSModules from 'react-css-modules';

import styles from './Button.module.scss';

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div styleName="button">
        <MaterialIcon icon={this.props.icon} />
        <span styleName="buttonText">{this.props.text}</span>
      </div>
    );
  }
}

export default CSSModules(Button, styles);
