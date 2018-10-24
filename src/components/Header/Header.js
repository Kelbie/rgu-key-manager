import React, { Component } from 'react';

import './Header.scss';

import firebase from "../Firebase/Firebase";

// Header components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconFace from '@material-ui/icons/Face';
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

class Header extends Component {

    state = {
        openLogoutDialog: false,
    };

    handleLogoutDialogClick = () => {
        this.setState(state => ({ openLogoutDialog: !state.openLogoutDialog }));
    };
    handleLogout = () => {
        alert('You are disconnected');
        this.handleLogoutDialogClick();
    };

    render() {
        return (
            <div className="root">
                <AppBar className="app-bar">
                    <Toolbar>
                        <img className="logo" src={"/app-logo.png"}/>
                        <Typography button inset variant="title" color="inherit" className="grow">
                            RGU Keys Manager
                        </Typography>
                        <div>
                            <Chip
                                avatar={<Avatar><IconFace/></Avatar>}
                                label={firebase.auth().currentUser.displayName || "Unknown"}
                                onDelete={this.handleLogoutDialogClick}
                                className="account-chip}"/>
                            <Dialog
                                    open={this.state.openLogoutDialog}
                                    aria-labelledby="logout-dialog-title"
                                    aria-describedby="logout-dialog-description">
                                <DialogTitle id="logout-dialog-title">{"Logout"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="logout-dialog-description">
                                        Are you sure to logout ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleLogoutDialogClick} color="primary" autoFocus>
                                        Back
                                    </Button>
                                    <Button onClick={this.handleLogout} color="secondary">
                                        Logout
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;