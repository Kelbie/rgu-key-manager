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
import AddKeyPopup from "../../popups/AddKeyPopup/AddKeyPopup";

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

  onCollectionUpdate = (querySnapshot) => {
    querySnapshot.forEach(row => {
      row = row.data()
      this.state.keys.push([
          {
            text: row.keyid,
            a: row.typeid,
            b: row.uid,
            type: "button",
            linkTo: "/key/" + row.keyid
          },
          {
            text: row.type,
            type: "plain"
          },
          {
            text: row.holder,
            type: "button",
            linkTo: "/user/" + row.holder
          },
          {
            text: row.opens,
            type: "plain",
          },
          {
            text: row.stored,
            type: "plain",
          },
          {
            text: 0,
            type: "plain"
          }
      ])
      this.setState({filterKeys: this.state.keys})
    })
  }

  async componentDidMount() {
    const keysRef = await firestore.collection('keys')

    try {
      const snap = await keysRef.onSnapshot(this.onCollectionUpdate)
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
          rows={this.state.filterKeys.sort(function(a, b) {
            var aSize = a[0].a;
            var bSize = b[0].a;
            var aLow = a[0].b;
            var bLow = b[0].b;
            console.log(123, aLow + " | " + bLow);

            if(aSize == bSize)
            {
                return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
            }
            else
            {
                return (aSize < bSize) ? -1 : 1;
            }
          })}/>
        <AddKeyPopup />
      </div>
    );
  }

}

Keys.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Keys);
