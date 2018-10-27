import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import Dialog from '../../components/Button/DialogButton';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '../../components/Selects/Selects';

class Lost extends Component {
    render(){
        return (
          <>
            <Dialog yes="Update" no="Cancel" variant="outlined" color="primary" text="Lost" icon="warning" title={"Assign " + this.props.id + " as lost"} desc="Once assigned as lost the key will remain in the database but will be removed from the 'All keys' page and put into the 'Lost keys' page as seen on the side panel." content={
              <Grid container
                    direction="row"
                    alignItems="center">
              </Grid>
            } {...this.props}/>
          </>
        );
    }

}
export default Lost;
