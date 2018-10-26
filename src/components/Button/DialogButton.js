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

import firebase, {auth, database} from "../Firebase/Firebase";

class AlertDialog extends React.Component {
  state = {
    open: false,
    email: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInvite = () => {
    var state = this;
    auth.sendSignInLinkToEmail(this.state.email, {
      url: 'http://localhost:3000/signin',
      handleCodeInApp: true
    })
    .then(function() {
      console.log(123);
      state.setState({ open: false });
    })
    .catch(function(error) {
      console.log(error)
      state.setState({ open: false });
    });
  }

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
            <TextField onChange={(email) => this.setState({email: email.target.value})} label="Email" type="email" name="email" autoComplete="email" />
            <Select />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button text="Cancel" onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button text="Invite" onClick={this.handleInvite} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
