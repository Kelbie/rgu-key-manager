import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

// Graphics Components
import { Typography, InputBase, Toolbar, Button, Paper, Grid, List, ListItem, ListSubheader, Divider, ListItemText, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, InputAdornment, Snackbar, LinearProgress } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person"
import KeyIcon from '@material-ui/icons/VpnKey';
import FobIcon from '@material-ui/icons/Nfc'
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';

// Firebase Components
import { firestore  } from '../../components/Firebase/Firebase';
import FilterChip from '../../components/FilterChip/FilterChip';

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
    paper: {
        width: '100%',
        maxHeight: "75vh",
        overflowX: "auto"
    },
    header: {
        backgroundColor: theme.palette.common.white,
        textAlign: "center",
    },
    link: {
        textDecoration: 'none',
    },
    item: {
        '&:hover': {
            backgroundColor: fade(purple[500], 0.10),
        }
    },
    number: {
        textAlign: "center",
        marginTop: 10,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 5,
    },
    avatar: {
        height: 70,
        width: 70,
    },
    icon: {
        height: 60,
        width: 60,
    }
});

class People extends Component {

    constructor() {
        super();

        this.unsubscribe = null;
        this.state = {
            openDialog: false,
            requiredName: false,
            requiredRGUID: false,
            name: "",
            rgu_id: "",
            nb_keys: "",
            nb_fobs: "",
            people: [],
            loading: true,
        };
    }

    componentDidMount(){
        this.unsubscribe = firestore.collection("people").onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        var people = [];
        querySnapshot.forEach(doc => {
            people.push(doc.data());
        });
        this.setState({loading: false, people});
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value
        });
    };

    handleOpenDialog = () => {
        this.setState({ openDialog: true });
    }

    handleCloseDialog = () => {
        this.setState({ openDialog: false });
    }

    handleSaveAdding = () => {
        if (this.state.name != "" && this.state.rgu_id != "") {
            firestore.collection("people").add({
                name: this.state.name,
                rgu_id: this.state.rgu_id,
                nb_keys: this.state.nb_keys,
                nb_fobs: this.state.nb_fobs
            })
            .then(() => {
                console.log("Key owner successfully added!");
                this.handleCloseDialog();
                this.setState({required: false});
            })
            .catch(function(error) {
                alert("Error adding owner: " + error);
            });
        } else {
            this.state.name === "" ? this.setState({requiredName: true}) : this.setState({requiredName: false});
            this.state.rgu_id === "" ? this.setState({requiredRGUID: true}) : this.setState({requiredRGUID: false});
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title} component="h1" variant="display2">Holders</Typography>
                    <div className={classes.grow} />
                    <FilterChip icon={<KeyIcon/>} label="Key Holders"/>
                    <FilterChip icon={<FobIcon/>} label="Fob Holders"/>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}><SearchIcon/></div>
                        <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}/>
                    </div>
                </Toolbar>
                <Paper className={classes.paper}>
                    <List>
                        <ListSubheader className={classes.header}>
                            <Toolbar disableGutters>
                                <Grid container spacing={12}>
                                    <Grid item xs={4}>NAME</Grid>
                                    <Grid item xs={4}>NB KEYS</Grid>
                                    <Grid item xs={4}>NB FOBS</Grid>
                                </Grid>
                            </Toolbar>
                            <Divider/>
                        </ListSubheader>
                        {this.state.loading && <LinearProgress />}
                        {this.state.people.map(doc => {
                        return (
                            <Link className={classes.link} to={"/user/"+doc.name}>
                                <ListItem button className={classes.item}>
                                    <Grid container spacing={12}>
                                        <Grid item xs={1}><Avatar><PersonIcon/></Avatar></Grid>
                                        <Grid item xs={3}>
                                            <ListItemText primary={doc.name} secondary={doc.rgu_id}/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItemText className={classes.number} primary={doc.nb_keys}/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItemText className={classes.number} primary={doc.nb_fobs}/>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </Link>
                        );
                        })}
                    </List>
                </Paper>
                <Button variant="fab" className={classes.fab} color="secondary" onClick={this.handleOpenDialog}>
                    <AddIcon />
                </Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a key owner's</DialogTitle>
                    <DialogContent>
                        <Grid container direction="column" spacing="32">
                            <Grid item>
                                <Grid container direction="row" justify="space-evenly" alignItems="center">
                                    <Grid item>
                                        <Avatar className={classes.avatar}><PersonIcon className={classes.icon}/></Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column" spacing="8">
                                            <Grid item><TextField autoFocus id="name" label="Name" type="name" onChange={this.handleChange('name')} error={this.state.requiredName} required/></Grid>
                                            <Grid item><TextField id="rgu_id" label="RGU ID" type="number" onChange={this.handleChange('rgu_id')} error={this.state.requiredRGUID} required/></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justify="space-around" alignItems="flex-end" >
                                    <Grid item xs="3">
                                        <TextField id="nb_keys" label="Nb keys" type="number" onChange={this.handleChange('nb_keys')} InputProps={{
                                            startAdornment: (<InputAdornment position="start"><KeyIcon/></InputAdornment>),}}/>
                                    </Grid>
                                    <Grid item xs="3">
                                        <TextField id="nb_fobs" label="Nb fobs" type="number" onChange={this.handleChange('nb_fobs')} InputProps={{
                                            startAdornment: (<InputAdornment position="start"><FobIcon/></InputAdornment>),}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="secondary">Cancel</Button>
                        <Button onClick={this.handleSaveAdding} color="primary" variant="contained">Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

People.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(People);  
