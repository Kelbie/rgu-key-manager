import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Firebase
import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Material UI Components
import { Toolbar, Typography, InputBase, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Avatar, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import KeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import LocationIcon from '@material-ui/icons/LocationOn';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';

// Graphics Components
import Table from '../../components/Table/Table';
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
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
  },
  avatar: {
    height: 80,
    width: 80,
  },
  icon: {
      height: 70,
      width: 70,
  },
});

class Keys extends Component {

  state = {
    filterKeys: [], 
    keys: [], 
    filterText: "",
  }

  async componentWillMount() {
    const keysRef = await firestore.collection('keys')

    try {
      const snap = await keysRef.get()
      console.log(888, snap)
      snap.forEach(row => {
        row = row.data()
        console.log(888, row.keyid)
        this.state.keys.push([
            {
              text: row.keyid,
              type: "button",
              linkTo: "/key/" + row.keyid
            },
            {
              text: row.type,
              type: "plain"
            },
            {
              text: row.holder.id,
              type: "button",
              linkTo: "/user/" + row.holder.id
            },
            {
              text: row.opens.id,
              type: "plain",
            },
            {
              text: row.stored.id,
              type: "plain",
            },
            {
              text: 0,
              type: "plain"
            }
        ])
        this.setState({filterKeys: this.state.keys})
      })
    } catch (e) {
      console.log(e)
    }
  }

  filter = (obj) => {
    if (this.state.filterText != "") {
      return obj[0].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[1].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[2].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[3].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[4].text.toUpperCase().includes(this.state.filterText.toUpperCase())
    } else {
      return true
    }
  }

  handleOnChange = (filterText) => {
    this.setState({
      filterText: filterText
     }, ()=>{
       this.setState({filterKeys: this.state.keys.filter(this.filter)})
       console.log(this.state.filterKeys.length, this.state.keys.length)
     });

  }

  handleClickChip = (item) => {
  }

  handleOnDialogChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleOpenDialog = () => {
    this.setState({ openDialog: true });
  }

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} component="h1" variant="display2">Keys</Typography>
          <div className={classes.grow}/>
          <FilterChip label="Lost keys"/>
          <div className={classes.search}>
              <div className={classes.searchIcon}><SearchIcon/></div>
              <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}
                onChange={(filterText) => this.handleOnChange(filterText.target.value)} label="Filter"/>
          </div>
        </Toolbar>
        <Table path="key"
          columns={["KEY ID", "TYPE", "HOLDER", "OPENS", "STORED", "DUPLICATES"]}
          rows={this.state.filterKeys}/>
        <Button variant="fab" className={classes.fab} color="secondary" onClick={this.handleOpenDialog}>
          <AddIcon />
        </Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a new key</DialogTitle>
          <DialogContent>
              <Grid container direction="column" alignItems='center' spacing="24">
                  <Grid item>
                      <Grid container direction="row" spacing="32" justify="space-evenly" alignItems="center">
                          <Grid item>
                              <Avatar className={classes.avatar}><KeyIcon className={classes.icon}/></Avatar>
                          </Grid>
                          <Grid item>
                              <Grid container direction="column" spacing="8">
                                  <Grid item><TextField autoFocus id="key_id" label="Key ID" type="text" onChange={this.handleOnDialogChange('key_id')} error={this.state.requiredKeyID} required/></Grid>
                                  <Grid item><TextField id="key_type" label="Key type" type="text" onChange={this.handleOnDialogChange('key_type')}/></Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={8} alignItems="flex-end">
                      <Grid item><LocationIcon/></Grid>
                      <Grid item><TextField id="opens" label="Opens" type="name" onChange={this.handleOnDialogChange('opens')}/></Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                      <Grid item><LocationIcon/></Grid>
                      <Grid item><TextField id="location" label="Location" type="name" onChange={this.handleOnDialogChange('location')}/></Grid>
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

Keys.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Keys);
