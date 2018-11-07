import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Firebase Components
import { firestore  } from '../../components/Firebase/Firebase';

import UserCard from "./UserCard";
import { Toolbar, Typography, Grid, InputBase, CircularProgress } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';


const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit,
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(purple[500], 0.15),
        '&:hover': {
          backgroundColor: fade(purple[500], 0.30),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
    },
    searchIcon: {
        color: theme.palette.common.white,
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(purple[500], 0.50),
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
            backgroundColor: fade(purple[500], 0.75),
          },
        },
    },
    grid: {
        width: '105%',
        maxHeight: "80vh",
        overflowX: "auto"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class UsersPage extends Component {

    constructor (){
        super();

        this.unsubscribe = null;
        this.state = {
            users: [],
            loading: true,
        }
    }

    componentDidMount(){
        this.unsubscribe = firestore.collection("users").onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        var users = [];
        querySnapshot.forEach(doc => {
            users.push(doc.data());
        });
        this.setState({loading: false, users});
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Toolbar>
                    <Typography component="h1" variant="display2">Manage Users</Typography>
                    {this.state.loading && <CircularProgress className={classes.progress} />}
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}><SearchIcon/></div>
                        <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}/>
                    </div>
                </Toolbar>
                <Grid className={classes.grid} container spacing={16}>
                    {this.state.users.map(user => (
                        <Grid item>
                            <UserCard user={user}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }

}

UsersPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersPage);        