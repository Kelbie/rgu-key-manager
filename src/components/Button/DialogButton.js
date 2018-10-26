import React from 'react';
import Button from './HeaderButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '../Selects/Selects';

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant={this.props.variant} color={this.props.color} text={this.props.text} icon={this.props.icon} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Email Invite for " + this.props.id}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Whoever you invite here will be given this page along with all the history and assigned keys.
            </DialogContentText>
            <Grid container
                  direction="row"
                  alignItems="center">
            <TextField label="Email" type="email" name="email" autoComplete="email" />
            <Select />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button text="Cancel" onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button text="Save" onClick={this.handleClose} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
