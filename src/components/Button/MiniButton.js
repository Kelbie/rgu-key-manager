import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
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
  button: {
    margin: 0,
    padding: 0,
    minHeight: 0
  },
  iconSmall: {
    fontSize: 20,
  },
});

function HeaderButton(props) {
  const { classes } = props;
  return (
    <Button {...props} color="primary" className={classes.button}>
      {props.text}
    </Button>
  );
}

HeaderButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderButton);
