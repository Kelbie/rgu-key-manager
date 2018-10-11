import React, { Component } from 'react';

import './Dashboard.module.scss';

import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import KeyIcon from '@material-ui/icons/VpnKey';
import FobIcon from '@material-ui/icons/Nfc'
import PeopleIcon from '@material-ui/icons/Person';
import UsersIcon from '@material-ui/icons/SupervisorAccount'
import MapIcon from '@material-ui/icons/LocationOn';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
});

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="root">
            <AppBar className="app-bar">
                <Toolbar>
                    <IconButton className="menuButton" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className="grow">
                        RGU Keys Manager
                    </Typography>
                    <Button className="loginButton" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" className="drawerPaper">
                <div className="toolbar"/>
                <List>
                    <ListItem button>
                        <ListItemIcon><UsersIcon/></ListItemIcon>
                        <ListItemText primary="MANAGE USERS"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MapIcon/></ListItemIcon>
                        <ListItemText primary="KEY MAP"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon><KeyIcon/></ListItemIcon>
                        <ListItemText primary="KEYS"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><FobIcon/></ListItemIcon>
                        <ListItemText primary="FOBS"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><PeopleIcon/></ListItemIcon>
                        <ListItemText primary="PEOPLE"/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
  }
}

Dashboard.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(mAppBar);