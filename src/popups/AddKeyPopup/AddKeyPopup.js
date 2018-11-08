import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import { Toolbar, Typography, InputBase, Button, Avatar, InputAdornment, withStyles } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import KeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import LocationIcon from '@material-ui/icons/LocationOn';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';

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
import AutoComplete from '../../components/AutoComplete/AutoComplete'

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
  },
  avatar: {
    height: 80,
    width: 80,
  },
  icon: {
      height: 70,
      width: 70,
  },
});

class AlertDialog extends React.Component {
  state = {
    author: "",
    typeid: "",
    uid: 1,
    type: "",
    holder: "",
    opens: "",
    stored: "",
    keyid: "",
    lost: false,
    users: [],
    keys: [],
    open: false,
  };

  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  userSnapshot = (querySnapshot) => {
    querySnapshot.forEach(row => {
      if (row.data().username == "root") {
        this.state.holder = row.data().username
      }
        this.state.users.push(row)
    })
  }

  keySnapshot = (querySnapshot) => {
    this.state.key = [];
    this.state.uid = 1;
    querySnapshot.forEach(row => {
        this.state.keys.push(row)
    })
  }

  async componentWillMount() {
    const userRef = firestore.collection('users');
    try {
      const snap = await userRef.onSnapshot(this.userSnapshot);

    } catch(e) {
      console.log(123, e)
    }


    const keysRef = await firestore.collection('keys');

    try {
      const snap = await keysRef.onSnapshot(this.keySnapshot);

    } catch(e) {
      console.log(123, e)
    }
  }

  handleClose = () => {
    this.setState({
      author: "",
      typeid: "",
      uid: 1,
      type: "",
      holder: "",
      opens: "",
      stored: "",
      keyid: "",
      lost: false,
      open: false,
    });
  };

  onChange = () => {
    let uid = 1;
    let type = "";
    this.state.keys.forEach(key => {
      if (key.data().typeid == this.state.typeid) {
        uid += 1;
        type = key.data().type;
      } else {
        type = ""
      }
      this.setState({uid: uid, type: type})
    })
  }

  async handleAdd() {
    await this.createHistoryElement()
    const keysRef = await firestore.collection('keys');
    console.log(this.state);
    keysRef.doc(this.state.typeid + "(" + this.state.uid + ")").set({
      typeid: this.state.typeid,
      type: this.state.type,
      uid: this.state.uid,
      opens: this.state.opens,
      stored: this.state.stored,
      keyid: this.state.typeid + "(" + this.state.uid + ")",
      lost: this.state.lost,
      holder: "root"
    })
    this.handleClose()
    window.location.refresh()
  }

  async getLastOwner() {
    const keyid = this.props.id
    const keyRef = await firestore.collection('keys').where('keyid', '==', keyid)

    try {
      const snap = await keyRef.get()
      snap.forEach(row => {
        row = row.data()
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

    console.log(123);

    firestore.collection('history').add({
      author: this.state.author,
      comment: "",
      from: "root",
      keyid: this.state.typeid + "(" + this.state.uid + ")",
      time: new Date,
      actionType: "created",
      to: "root"
    })
  }

  handleOpenDialog = () => {
    this.setState({ openDialog: true });
  }

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="fab" className={classes.fab} color="secondary" onClick={this.handleOpenDialog}>
          <AddIcon />
        </Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a new key</DialogTitle>
          <DialogContent>
              <Grid container direction="column" alignItems='center' spacing="24">
                  <Grid item>
                      <Grid container direction="row" spacing="32" justify="space-evenly" alignItems="center">
                          <Grid item>
                              <Avatar className={classes.avatar}><KeyIcon className={classes.icon}/></Avatar>
                          </Grid>
                          <Grid item>
                              <Grid container direction="column" spacing="8">
                                <Grid item><TextField autoFocus id="type_id" label="Type ID" type="text" onChange={(input) => this.setState({typeid: input.target.value})} error={this.state.requiredKeyID} required/></Grid>
                                <Grid item><TextField autoFocus id="type" label="Type" type="text" onChange={(input) => this.setState({type: input.target.value})} error={this.state.requiredKeyID} required/></Grid>

                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={8} alignItems="flex-end">
                      <Grid item><LocationIcon/></Grid>
                      <Grid item><TextField id="opens" label="Opens" type="name" onChange={(input) => this.setState({opens: input.target.value})} /></Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                      <Grid item><LocationIcon/></Grid>
                      <Grid item><TextField id="stored" label="Stored" type="name" onChange={(input) => this.setState({stored: input.target.value})} /></Grid>
                    </Grid>
                  </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCloseDialog} color="secondary">Cancel</Button>
                <Button onClick={this.handleAdd} color="primary" variant="contained">Add</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AlertDialog);
