import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import async from 'async';

import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";


import Button from '../../components/Button/HeaderButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '../../components/Selects/Selects';


class AlertDialog extends React.Component {
  state = {
    open: false,
    email: null,
    transfer_author: null,
    assigned_user: null,
    key: null,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  async componentDidMount() {
    
  }

  async test() {
    // const userRef = await firestore.collection('users')
    //                             .where("username", "==", this.state.username)
    // try {
    //   const snap = await userRef.get()
    //   const that = this;
    //   snap.forEach(function(doc) {
    //     that.setState({assigned_user: doc})
    //   })
    // } catch(e) {
    //   console.log(e);
    // }
    //
    // const keyRef = await firestore.collection('keys')
    //                             .where("keyid", "==", this.props.id)
    //
    // try {
    //   const snap = await keyRef.get()
    //   const that = this;
    //   snap.forEach(function(doc) {
    //     that.setState({key: doc})
    //   })
    //
    // } catch(e) {
    //   console.log(e);
    // }

    firestore.collection('history').add({
      author: firestore.doc("users/" + this.state.username),
      entity: firestore.doc("keys/" + this.props.id),
      dest: firestore.doc("users/" + this.state.username)
    })
  }

  handleTransfer = () => {
    this.test()
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button variant={"outlined"} color={"primary"} text={"Transfer"} icon={"send"} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Transfer " + this.props.id + " to someone"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {"Whoevers username you input here is assumed to have the key after you click 'transfer'"}
            </DialogContentText>
            <Grid container
                  direction="row"
                  alignItems="center">
              <TextField onChange={(username) => this.setState({username: username.target.value})} label="Username" type="username" name="username" autoComplete="username" />
              <Select title="Duration" options={["N/A"]}/>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button text={"Cancel"} onClick={this.handleClose} color="primary" />
            <Button text={"Transfer"} onClick={this.handleTransfer} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
