import React, { Component } from 'react';

import './Dashboard.scss';

import { withStyles } from '@material-ui/core/styles';

// Header components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Drawer components
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
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class Dashboard extends Component {
    constructor() {
        super();
    }

    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

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
                <Drawer variant="permanent" className="drawer-paper">
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
                    </List>
                    <Divider/>
                    <List subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
                        {/* Keys collapse list */}
                        <ListItem button onClick={this.handleClick}>
                            <ListItemIcon><KeyIcon/></ListItemIcon>
                            <ListItemText inset primary="KEYS"/>
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className="nested-item">
                                    <ListItemText inset primary="ALL KEYS" />
                                </ListItem>
                                <ListItem button className="nested-item">
                                    <ListItemText inset primary="LOST KEYS" />
                                </ListItem>
                            </List>
                        </Collapse>


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

export default Dashboard;