import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Firebase
import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Material UI Components
import { Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';

// Graphics Components
import Table from '../../components/Table/Table';

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
});

class Keys extends Component {

  state = {
    filterKeys: [], 
    keys: [], 
    filterText: ""
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} component="h1" variant="display2">All keys</Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
              <div className={classes.searchIcon}><SearchIcon/></div>
              <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}
                onChange={(filterText) => this.handleOnChange(filterText.target.value)} label="Filter"/>
          </div>
        </Toolbar>
        <Table path="key"
          columns={["KEY ID", "TYPE", "HOLDER", "OPENS", "STORED", "DUPLICATES"]}
          rows={this.state.filterKeys}/>
      </div>
    );
  }

}

Keys.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Keys);
