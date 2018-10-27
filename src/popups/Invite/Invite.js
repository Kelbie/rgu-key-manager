import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import Dialog from '../../components/Button/DialogButton';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '../../components/Selects/Selects';

class Invite extends Component {
    render(){
        return (
          <>
            <Dialog yes="Send" no="Cancel" variant="outlined" color="primary" text="Invite" icon="send" title={"Email invite for " + this.props.id} desc="Whoever you invite here will be given this page along with all the history and assigned keys." content={
              <Grid container
                    direction="row"
                    alignItems="center">
                <TextField onChange={(email) => this.setState({email: email.target.value})} label="Email" type="email" name="email" autoComplete="email" />
                <Select title="Role" options={["Super Admin", "Admin"]}/>
              </Grid>
            } {...this.props}/>
          </>
        );
    }

}
export default Invite;
