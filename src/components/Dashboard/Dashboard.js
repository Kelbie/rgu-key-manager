import React, { Component } from 'react';

import './Dashboard.scss';
import logo from '../../rgu-logo.png';

// Header components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class Dashboard extends Component {

    state = {
        openKey: false,
        openFob: false,
    };
    handleKeyClick = () => {
        this.setState(state => ({ openKey: !state.openKey }));
    };
    handleFobClick = () => {
        this.setState(state => ({ openFob: !state.openFob }));
    };

    render() {
        return (
            <div className="root">
                <AppBar className="app-bar">
                    <Toolbar>
                        <img className="logo" src={logo}/>
                        <Typography button inset variant="title" color="inherit" className="grow">
                            RGU Keys Manager
                        </Typography>
                        <Button className="loginButton" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" className="drawer-paper">
                    <Toolbar/>
                    <List>
                        <ListItem button>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><UsersIcon/></ListItemIcon>
                            <ListItemText primary="Manage users"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><MapIcon/></ListItemIcon>
                            <ListItemText primary="Keys map"/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List subheader={<ListSubheader component="div">Keys managment</ListSubheader>}>
                        {/* Keys collapse list */}
                        <ListItem button onClick={this.handleKeyClick}>
                            <ListItemIcon><KeyIcon/></ListItemIcon>
                            <ListItemText inset primary="Keys"/>
                            {this.state.openKey ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.openKey} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className="nestedItem">
                                    <ListItemText inset primary="All keys" />
                                </ListItem>
                                <ListItem button className="nestedItem">
                                    <ListItemText inset primary="Lost Keys" />
                                </ListItem>
                            </List>
                        </Collapse>

                        {/* Fobs collapse list */}  
                        <ListItem button onClick={this.handleFobClick}>
                            <ListItemIcon><FobIcon/></ListItemIcon>
                            <ListItemText inset primary="Fobs"/>
                            {this.state.openFob ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.openFob} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className="nestedItem">
                                    <ListItemText inset primary="All fobs" />
                                </ListItem>
                                <ListItem button className="nestedItem">
                                    <ListItemText inset primary="Lost fobs" />
                                </ListItem>
                            </List>
                        </Collapse>

                        {/* People item list */}  
                        <ListItem button>
                            <ListItemIcon><PeopleIcon/></ListItemIcon>
                            <ListItemText primary="People"/>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Dashboard;