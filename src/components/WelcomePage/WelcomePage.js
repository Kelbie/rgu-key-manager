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

class WelcomePage extends Component {

    render(){
        return (
            <div lassName="root">
                <img className="background" src={background}/>
                <Grid container spacing={12}>
                    <Grid container item xs={6} className="left-container">
                        <Paper container className="paper-container" elevation={10}>
                            <img className="rgu-logo" src={RGULogo}/>
                            <Typography className="title" variant="h5" component="h2">
                                Welcome to RGU Key Manager
                            </Typography>
                            
                            <form className="form">
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                </FormControl>
                                <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit">
                                    Sign in
                                </Button>
                            </form>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}
export default WelcomePage;