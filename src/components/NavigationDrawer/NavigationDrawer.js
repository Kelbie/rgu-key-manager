import React, { Component } from 'react';

import './NavigationDrawer.scss';

// Drawer components
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';

// Drawer icons
import KeyIcon from '@material-ui/icons/VpnKey';
import FobIcon from '@material-ui/icons/Nfc'
import PeopleIcon from '@material-ui/icons/Person';
import UsersIcon from '@material-ui/icons/SupervisorAccount';
import MapIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FaceIcon from '@material-ui/icons/Face'

class NavigationDrawer extends Component {

    state = {
        openKeyItem: false,
        openFobItem: false,
    };

    handleKeyItemClick = () => {
        this.setState(state => ({ openKeyItem: !state.openKeyItem }));
    };
    handleFobItemClick = () => {
        this.setState(state => ({ openFobItem: !state.openFobItem }));
    };

    render() {
        return (
            <div className="root">
                <Drawer variant="permanent" className="drawer-paper">
                    <Toolbar/>
                    <List>
                        <ListItem button selected>
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
                        <ListItem button onClick={this.handleKeyItemClick}>
                            <ListItemIcon><KeyIcon/></ListItemIcon>
                            <ListItemText inset primary="Keys"/>
                            {this.state.openKeyItem ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.openKeyItem} timeout="auto" unmountOnExit>
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
                        <ListItem button onClick={this.handleFobItemClick}>
                            <ListItemIcon><FobIcon/></ListItemIcon>
                            <ListItemText inset primary="Fobs"/>
                            {this.state.openFobItem ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.openFobItem} timeout="auto" unmountOnExit>
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
                    <Divider/>
                    <List>
                        <ListItem button >
                            <ListItemIcon><FaceIcon/></ListItemIcon>
                            <ListItemText primary="Account settings"/>
                        </ListItem>
                        <ListItem button href="/about">
                            <ListItemIcon><AboutIcon/></ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }

} export default NavigationDrawer;