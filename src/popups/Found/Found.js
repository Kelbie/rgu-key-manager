import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import async from 'async';

import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Graphics Components
import Select from '../../components/Selects/Selects';
import Button from '../../components/Button/HeaderButton';


class Found extends React.Component {
  state = {
    open: false,
    lost: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  async test() {
    const keyRef = await firestore.collection('keys').doc(this.props.id)
      .update({lost: false})
  }

  handleTransfer = () => {
    this.test()
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button variant={"outlined"} color={"primary"} text={"Found"} icon={"warning"} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Assign " + this.props.id + " as Found"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {"Once assigned as found the key will remain in the database but will be removed from the 'All keys' page and put into the 'Found keys' page as seen on the side panel."}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button text={"Cancel"} onClick={this.handleClose} color="primary" />
            <Button text={"Submit"} onClick={this.handleTransfer} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Found;
