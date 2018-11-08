import React from 'react';

// Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import async from 'async';
import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Graphics Components
import Button from '../../components/Button/HeaderButton';
import Select from '../../components/Selects/Selects';

class AlertDialog extends React.Component {
  state = {
    open: false,
    email: null
  };

  sendEmail() {
    console.log(123, 123);
    var state = this;
    auth.sendSignInLinkToEmail(this.state.email, {
      url: 'http://localhost:3000/signin',
      handleCodeInApp: true
    })
    .then(function() {
      console.log(123,);
      state.setState({ open: false });
    })
    .catch(function(error) {
      console.log(123, error)
      state.setState({ open: false });
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTransfer = () => {
    this.sendEmail()
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button variant={"outlined"} color={"primary"} text={"Invite"} icon={"send"} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Send " + this.props.id + " an email invite"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Decide which permissions to give to {this.props.id} by clicking on the drop down.
            </DialogContentText>
            <Grid container
                  direction="row"
                  alignItems="center">
              <TextField onChange={(email) => this.setState({email: email.target.value})} label="Email" type="email" name="email" autoComplete="email" />
              <Select title="Role" options={["Super Admin", "Admin"]}/>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button text={"Cancel"} onClick={this.handleClose} color="primary" />
            <Button text={"Invite"} onClick={this.handleTransfer} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
