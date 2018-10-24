import React, { Component } from 'react';

import './AboutPage.scss';
import AppLogo from '../../app-logo.svg';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

class AboutPage extends Component {

    render(){
        return (
            <div lassName="root">
            <Grid>
                <img className="app-logo" src={AppLogo}/>
            </Grid>
            </div>
        );
    }

}
export default AboutPage;