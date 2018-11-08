import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Avatar, DialogContentText } from '@material-ui/core';

import PersonIcon from "@material-ui/icons/Person";

import {auth, firestore} from "../../components/Firebase/Firebase";

// Graphics Components
import Button from '../../components/Button/HeaderButton';

const styles = theme => ({
  avatar: {
    height: 70,
    width: 70,
  },
  icon: {
      height: 60,
      width: 60,
  }
})

class AlertDialog extends React.Component {
  state = {
    open: false,
    rgu_id: " ",
  };

  sendEmail() {
    console.log(123, 123);
    var state = this;
    auth.sendSignInLinkToEmail(this.state.email, {
      url: 'http://localhost:3000',
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
    const { classes } = this.props;

    return (
      <div>
        <Button variant={"outlined"} color={"primary"} text={"Invite"} icon={"send"} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Invite " + this.props.id + " to become an app user"}</DialogTitle>
          {/*<DialogContent>
            <DialogContentText id="alert-dialog-description">
              Decide which permissions to give to {this.props.id} by clicking on the drop down.
            </DialogContentText>
            <Grid container
                  direction="row"
                  alignItems="center">
              <TextField onChange={(email) => this.setState({email: email.target.value})} label="Email" type="email" name="email" autoComplete="email" />
              <Select title="Role" options={["Super Admin", "Admin"]}/>
            </Grid>
          </DialogContent>*/}
          <DialogContent>
              <Grid container direction="column" spacing="24">
                  <Grid item>
                      <Grid container direction="row" justify="space-evenly" alignItems="center">
                          <Grid item>
                              <Avatar className={classes.avatar}><PersonIcon className={classes.icon}/></Avatar>
                          </Grid>
                          <Grid item>
                              <Grid container direction="column">
                                  <Grid item><TextField  id="name" label="Name" type="name" value={this.props.id}/></Grid>
                                  <Grid item><TextField id="rgu_id" label="RGU ID" type="number" onChange={(rgu_id) => this.setState({rgu_id: rgu_id.target.value})}/></Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item>
                    <DialogContentText id="alert-dialog-description">
                      Choose a temp password for {this.props.id}
                    </DialogContentText>
                    <Grid container direction="row">
                      <Grid item>
                        <TextField
                            label="Password"
                            placeholder="Password"
                            type="password"
                            className={classes.textField}
                            margin="normal"/>
                      </Grid>
                      <Grid item>
                        <TextField
                            label="Password"
                            placeholder="Password"
                            type="password"
                            className={classes.textField}
                            margin="normal"/>
                      </Grid>
                    </Grid>
                  </Grid>
              </Grid>
          </DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            Email send to {this.props.id} at {this.state.rgu_id}@rgu.ac.uk
          </DialogContentText>
          <DialogActions>
            <Button text={"Cancel"} onClick={this.handleClose} color="primary" />
            <Button text={"Invite"} onClick={this.handleTransfer} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AlertDialog);  
