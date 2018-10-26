import React, { Component } from 'react';

import './WelcomePage.scss';
import background from './welcome_page_background.jpg';
import RGULogo from './rgu-logo.png';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import firebase from "../../components/Firebase/Firebase";

class WelcomePage extends Component {

    state = {
        email: '',
        password: ''
    };

    emailChange = this.emailChange.bind(this);
    passwordChange = this.passwordChange.bind(this);
    handleSignIn = this.handleSignIn.bind(this);

    emailChange(event) {
        this.setState({email: event.target.value});
    };
    passwordChange(event) {
        this.setState({password: event.target.value});
    };

    handleSignIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alert("Error : " + errorMessage);
        });
    };

    render(){
        return (
            <div lassName="root">
                <img className="background" src={background}/>
                <Grid container spacing={12}>
                    <Grid container item xs={12} sm={6} className="left-container">
                        <Paper container className="paper-container" elevation={10}>
                            <img className="rgu-logo" src={RGULogo}/>
                            <Typography className="title" variant="h5" component="h2">
                                RGU Key Manager
                            </Typography>
                            
                            <div className="form">
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    autoComplete="email" 
                                    onChange={this.emailChange} 
                                    autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.passwordChange}
                                />
                                </FormControl>
                                <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                        onClick={this.handleSignIn}>
                                    Sign in
                                </Button>
                            </div>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}
export default WelcomePage;
