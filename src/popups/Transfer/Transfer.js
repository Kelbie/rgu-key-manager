import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import async from 'async';

import Select from 'react-select';

// Firebase
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
import Button from '../../components/Button/HeaderButton';
import AutoComplete from '../../components/AutoComplete/AutoComplete'


class AlertDialog extends React.Component {
  state = {
    open: false,
    email: null,
    author: null,
    lastOwner: null,
    note: null,
    to: null,
    keyid: null,
    users: [],
    username: "root"
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.getUsers()
  }

  async getUsers() {
    const usersRef = await firestore.collection('users')

    try {
      const snap = await usersRef.get()
      snap.forEach(row => {
        row = row.data()
        console.log(888, row.username)
        this.state.users.push({label: row.username})
      })
    } catch (e) {
      console.log(888, e)
    }
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
        this.setState({lastOwner: row.holder.id})
      })
    } catch (e) {
      console.log(888, e)
    }
  }

  async updateOwner() {
    await this.getLastOwner()
    const keyRef = await firestore.collection('keys').doc(this.props.id)
      .update({holder: firestore.doc('/users/' + this.state.username)})
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
      console.log(888, e)
    }

    console.log(888, this.state.author, this.state.note, this.state.lastOwner, this.props.id, this.state.username)
    firestore.collection('history').add({
      author: this.state.author,
      comment: this.state.note,
      from: firestore.doc('/users/' + this.state.lastOwner),
      keyid: this.props.id,
      time: new Date,
      to: this.state.username
    })
  }

  handleTransfer = () => {
    this.updateOwner()
    this.createHistoryElement()
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
              <AutoComplete setSelected={(selectedUsername) => this.setState({username:selectedUsername})} options={this.state.users}/>
            </Grid>
            <TextField
              onChange={(note) => this.setState({note: note.target.value})}
              placeholder="Write a note about this transfer"
              variant="outlined"
              fullWidth={true}
              multiline={true}
              rows={3}
            />
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
