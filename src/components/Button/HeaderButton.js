import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI Icons
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import WarningIcon from '@material-ui/icons/Warning';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function HeaderButton(props) {
  const { classes } = props;
  return (
    <Button {...props} color="primary" className={classes.button}>
      {props.icon == "vpn_key" ? <VpnKeyIcon className={classes.leftIcon} /> : ""}
      {props.icon == "person_add" ? <PersonAddIcon className={classes.leftIcon} /> : ""}
      {props.icon == "warning" ? <WarningIcon className={classes.leftIcon} /> : ""}
      {props.icon == "send" ? <SendIcon className={classes.leftIcon} /> : ""}
      {props.icon == "folder" ? <FolderIcon className={classes.leftIcon} /> : ""}
      {props.icon == "expand_more" ? <ExpandMoreIcon className={classes.leftIcon} /> : ""}
      {props.icon == "settings_backup_restore" ? <SettingsBackupRestoreIcon className={classes.leftIcon} /> : ""}
      {props.text}
    </Button>
  );
}

HeaderButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderButton);
