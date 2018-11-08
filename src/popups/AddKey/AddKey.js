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
        console.log(123, key.data().typeid, key.data().type, this.state.typeid)
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

  render() {
    return (
      <div>
        <Button variant={"outlined"} color={"primary"} text={"Add"} icon={"send"} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add a key to the database"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {"Whoevers username you input here is assumed to have the key after you click 'transfer'"}
            </DialogContentText>
            <Grid container
                  direction="row"
                  alignItems="centre">
              <TextField onChange={(typeid) => {
                  this.setState({typeid: typeid.target.value}, function() {
                    this.onChange()
                  })

                }} label="TypeID" type="typeID" name="typeID" />
              <TextField onChange={(type) => this.setState({type: type.target.value})} value={this.state.type} label="Type" type="type" name="type" />
            </Grid>
            <Grid container
                  direction="row"
                  alignItems="centre">
              <TextField onChange={(opens) => this.setState({opens: opens.target.value})} label="Opens" type="opens" name="opens" />
              <TextField onChange={(stored) => this.setState({stored: stored.target.value})} label="Stored" type="stored" name="stored" />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button text={"Cancel"} onClick={this.handleClose} color="primary" />
            <Button text={"Add " + this.state.typeid + "(" + this.state.uid + ")"} onClick={this.handleAdd} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
