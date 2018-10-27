import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import Dialog from '../../components/Button/DialogButton';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '../../components/Selects/Selects';

class Transfer extends Component {
    render(){
        return (
          <>
            <Dialog yes="Transfer" no="Cancel" variant="outlined" color="primary" text="Transfer" icon="send" title={"Transfer " + this.props.id + " to someone"} desc={"Whoevers username you input here is assumed to have the key after you click 'transfer'"} content={
              <Grid container
                    direction="row"
                    alignItems="center">
                <TextField onChange={(username) => this.setState({username: username.target.value})} label="Username" type="username" name="username" autoComplete="username" />
                <Select title="Duration" options={["N/A"]}/>
              </Grid>
            } {...this.props}/>
          </>
        );
    }

}
export default Transfer;
