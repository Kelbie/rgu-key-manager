import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import AddIcon from '@material-ui/icons/Add';

import UserCard from "./UserCard";


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        padding: 20,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 5,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class UsersPage extends Component {

    state = {
        spacing: '16',
        openDialog: false,
        dialogError: false,
        email: "",
    };

    handleClickOpenDialog = () => {
        this.setState({ openDialog: true });
    };
    handleCloseDialog = () => {
        this.setState({ openDialog: false });
        this.state.dialogError = false;
    };

    emailChange = this.emailChange.bind(this);
    emailChange(event) {
        this.setState({email: event.target.value});
    };

    handleSubmitDialog = () => {
        if (/@rgu.ac.uk\s*$/.test(this.state.email)) {
            // Address is valid, send the email
            this.handleCloseDialog();
            alert("Sending mail");
        }else{this.state.dialogError = true;}
    };
    

    render(){

        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <div className={classes.root}>
                <Typography component="h1" variant="display2">Manage Users</Typography>

                <Grid container className={classes.grid} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                            {[0, 1, 2].map(value => (
                                <Grid key={value} item>
                                    <UserCard/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Button variant="fab" 
                    className={classes.fab} 
                    color="secondary"
                    onClick={this.handleClickOpenDialog}>
                    <AddIcon />
                </Button>

                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleCloseDialog}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Invite new user</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To invite a new user to use the app, please enter his RGU email address here. We will send
                            him a register link by email.
                        </DialogContentText>
                        <FormControl required error={this.state.dialogError === true} fullWidth aria-describedby="component-error-text">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                onChange={this.emailChange} 
                                label="Email Address"
                                placeholder="@rgu.ac.uk"
                                type="email"
                                fullWidth/>
                            <FormHelperText id="component-error-text" hidden={this.state.dialogError !== true}>Please enter a valid RGU email address</FormHelperText>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" onClick={this.handleSubmitDialog} color="primary">
                            Invite
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

UsersPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersPage);        