import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import styles from './Button.module.scss';

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.button}`}>
        <MaterialIcon icon={this.props.icon} />
        <span className={`${styles.buttonText}`}>{this.props.text}</span>
      </div>
    );
  }
}

export default Button;
