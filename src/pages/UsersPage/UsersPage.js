import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import UserCard from "./UserCard";


const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit,
    },
    grid: {
        padding: 20,
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
            </div>
        );
    }

}

UsersPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersPage);        