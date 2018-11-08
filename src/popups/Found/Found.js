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
    await this.getLastOwner()
    await this.createHistoryElement()
    const keyRef = await firestore.collection('keys').doc(this.props.id)
      .update({lost: false})
  }

  handleTransfer = () => {
    this.test()
    this.handleClose()
  }

  async getLastOwner() {
    console.log(888, this.props.id)
    const keyid = this.props.id
    const keyRef = await firestore.collection('keys').where('keyid', '==', keyid)

    try {
      const snap = await keyRef.get()
      console.log(888, snap)
      snap.forEach(row => {
        row = row.data()
        console.log(888, row)
        this.setState({lastOwner: row.holder})
      })
    } catch (e) {
      console.log(888, e)
    }
  }

  async createHistoryElement() {
    const author = auth.currentUser.email
    const userRef = await firestore.collection('users').where('email', '==', author)
    try {
      const snap = await userRef.get()
      snap.forEach(doc => {
        this.setState({
          author: doc.data().username
        })

      })
    } catch(e) {
      console.log(123, e)
    }

    console.log(123456, this.state);

    firestore.collection('history').add({
      author: this.state.author,
      comment: "",
      from: this.state.lastOwner,
      keyid: this.props.id,
      time: new Date,
      to: "root",
      actionType: "found"
    })
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
