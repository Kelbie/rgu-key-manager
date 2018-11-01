import React from 'react';

// Material UI Components
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HeaderButton from '../Button/HeaderButton';
import { withStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import WarningIcon from '@material-ui/icons/Warning';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

const styles = theme => ({
  testest: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const mapping = {
      'warning': <WarningIcon className={classes.leftIcon} />
    }

    return (
      <div>
        <HeaderButton
          variant="outlined"
          text={this.props.text}
          icon={this.props.icon}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >

        </HeaderButton>
        <Menu
          className={classes.testest}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {this.props.items.map(item => {
          return <MenuItem onClick={this.handleClose}>{mapping[item.icon]} {item.text.toUpperCase()}</MenuItem>
        })}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
