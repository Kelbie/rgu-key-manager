import React, { Component } from 'react';

import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import firebase, { auth, firestore, storage } from '../../components/Firebase/Firebase';

import { Typography, Paper, TextField, Avatar, Button, Badge, Grid, CircularProgress } from '@material-ui/core';
import PersonIcon from "./icon_person.svg";

import EditIcon from "@material-ui/icons/Edit"
import CheckIcon from '@material-ui/icons/Check';


const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit,
    },
    paper: {
        ...theme.mixins.gutters(),
        padding: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 20,
        marginRight: theme.spacing.unit * 20,
    },
    avatar:{
        width: 100,
        height: 100,
        margin: theme.spacing.unit,
        backgroundColor: "whitesmoke",
        cursor: "pointer"
    },
    badge: {
        top: 80,
        right: 0,
        width: 40,
        height: 40,
        cursor: "pointer"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    circleProgress: {
        position: "absolute",
        color: "primary",
        marginTop: -118,
        marginLeft: -2
    }
});

class AccountPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            avatar: "",
            username: "",
            email: "",
            firstPassword: "",
            secondPassword: "",
            loading: false,
            success: false,
        };

        this.handleLoadFile = this.handleLoadFile.bind(this)
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value
        });
    };

    handleLoadFile(event) {
        var file = event.target.files[0];
        var avatarStorageRef = storage.ref().child('users/'+auth.currentUser.uid+"/avatar/"+file.name);
        var uploadTask = avatarStorageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                  console.log('Upload is paused');
                  this.setState({
                    loading: false,
                    success: true,
                  });
                  break;
                case firebase.storage.TaskState.RUNNING:
                  console.log('Upload is running');
                  this.setState({
                    loading: true,
                    success: false,
                  });
                  break;
            }
        },function(error) {
            // Handle unsuccessful uploads
        },() => {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                firestore.collection("users").doc(auth.currentUser.uid).update({
                    avatar: downloadURL
                });
            });
        });
    };

    handleSaveName = () => {
        firestore.collection("users").doc(auth.currentUser.uid).update({
            username: this.state.username
        })
        .then(function() {
            console.log("Username successfully changed!");
        })
        .catch(function(error) {
            console.error("Error changing username: ", error);
        });
    };

    handleSaveEmail = () => {
        auth.currentUser.updateEmail(this.state.email)
        .then(() => {
            firestore.collection("users").doc(auth.currentUser.uid).update({
                email: this.state.email
            })
            .then(function() {
                console.log("Email successfully changed!");
            })
            .catch(function(error) {
                console.error("Error changing email: ", error);
            });
        }).catch(function(error) {
            console.error("Error changing email: ", error);
        });
    };

    handleSavePassword = () => {
        auth.currentUser.updatePassword(this.state.secondPassword)
        .then(() => {
            this.setState({
                firstPassword: "",
                secondPassword: ""
            });
            alert("Password successfully changed!");
        }).catch(function(error) {
            alert("Error changing password: " + error);
        });
    };

    render(){
        const { classes } = this.props;
        const { loading, success } = this.state;

        return (
            <div className={classes.root}>
                <Typography component="h1" variant="display2">Account Settings</Typography>
                <Paper className={classes.paper} elevation={1}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <input id="avatarInput" type="file" accept="image/*" style={{ display: 'none' }} 
                                ref={(ref) => this.avatarInput = ref} onChange={this.handleLoadFile} />
                            <Badge badgeContent={success ? <CheckIcon /> : <EditIcon />} color="secondary"
                                classes={{ badge: classes.badge }} onClick={(e) => this.avatarInput.click()}>
                                <div className={classes.wrapper}>
                                    <Avatar className={classes.avatar} 
                                        src={this.props.authUser.avatar || this.state.avatar || PersonIcon}/>
                                    {loading && <CircularProgress size={119} className={classes.circleProgress} />}
                                </div>
                            </Badge>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" justify="center" alignItems="flex-start">
                            <Grid item>
                                <Grid container alignItems={"flex-end"}>
                                    <Grid item>
                                        <TextField
                                            label={this.props.authUser.username || "Name"}
                                            placeholder="New name"
                                            className={classes.textField}
                                            onChange={this.handleChange('username')}
                                            margin="normal"/>
                                    </Grid>
                                    <Grid item>
                                        <Button color="primary"
                                            disabled={this.state.username === ""} 
                                            className={classes.saveButton} 
                                            onClick={this.handleSaveName}>
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems={"flex-end"}>
                                    <Grid item>
                                        <TextField
                                            label={this.props.authUser.email || "Email address"}
                                            placeholder="New email address"
                                            type="email"
                                            className={classes.textField}
                                            onChange={this.handleChange('email')}
                                            margin="normal"/>
                                    </Grid>
                                    <Grid item>
                                        <Button color="primary"
                                            disabled={this.state.email === ""} 
                                            className={classes.saveButton} 
                                            onClick={this.handleSaveEmail}>
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="flex-start" direction="column" justify="center">
                                    <Grid item>
                                        <TextField
                                            label="Change password"
                                            placeholder="New password"
                                            type="password"
                                            value={this.state.firstPassword}
                                            className={classes.textField}
                                            onChange={this.handleChange('firstPassword')}
                                            margin="normal"/>
                                    </Grid>
                                    <Grid item>
                                    {this.state.firstPassword.length >= 6 && 
                                        <Grid container alignItems={"flex-end"}>
                                            <Grid item>
                                                <TextField
                                                    label="Repeat password"
                                                    placeholder="Repeat new password"
                                                    type="password"
                                                    className={classes.textField}
                                                    onChange={this.handleChange('secondPassword')}
                                                    margin="normal"/>
                                            </Grid>
                                            <Grid item>
                                                <Button  color="primary"
                                                    className={classes.saveButton} 
                                                    disabled={
                                                        this.state.secondPassword === "" || 
                                                        (this.state.secondPassword !== "" && this.state.secondPassword !== this.state.firstPassword)
                                                    }
                                                    onClick={this.handleSavePassword}> 
                                                    Save 
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

}

AccountPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountPage);        