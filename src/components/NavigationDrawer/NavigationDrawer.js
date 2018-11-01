import React, {Component} from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
import { NEG_ONE } from 'long';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        zIndex: 0,
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    link: {
        textDecoration: 'none',
    },
});

class NavigationDrawer extends Component {

    state = {
        openKeyItem: false,
        openFobItem: false,
        selectedIndex: 0,
    };

    handleKeyItemClick = () => {
        this.setState(state => ({ openKeyItem: !state.openKeyItem }));
    };
    handleFobItemClick = () => {
        this.setState(state => ({ openFobItem: !state.openFobItem }));
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        const { classes } = this.props;
        return (
            <Drawer variant="permanent" className={classes.drawerPaper}>
                <div className={classes.toolbar} />
                <List>
                    <Link className={classes.link} to="/">
                        <ListItem button 
                            selected={this.state.selectedIndex === 0}
                            onClick={event => this.handleListItemClick(event, 0)}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/users">
                        <ListItem button 
                            selected={this.state.selectedIndex === 1}
                            onClick={event => this.handleListItemClick(event, 1)}>
                            <ListItemIcon><UsersIcon/></ListItemIcon>
                            <ListItemText primary="Manage users"/>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="">
                        <ListItem button 
                            selected={this.state.selectedIndex === 2}
                            onClick={event => this.handleListItemClick(event, 2)}>
                            <ListItemIcon><MapIcon/></ListItemIcon>
                            <ListItemText primary="Keys map"/>
                        </ListItem>
                    </Link>
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
                            <Link className={classes.link} to="/keys" >
                                <ListItem button className={classes.nested} 
                                    selected={this.state.selectedIndex === 3}
                                    onClick={event => this.handleListItemClick(event, 3)}>
                                    <ListItemText inset primary="All keys" />
                                </ListItem>
                            </Link>
                            <Link className={classes.link} to="">
                                <ListItem button className={classes.nested} 
                                    selected={this.state.selectedIndex === 4}
                                    onClick={event => this.handleListItemClick(event, 4)}>
                                    <ListItemText inset primary="Lost Keys" />
                                </ListItem>
                            </Link>
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
                            <Link className={classes.link} to="">
                                <ListItem button className={classes.nested} 
                                    selected={this.state.selectedIndex === 5}
                                    onClick={event => this.handleListItemClick(event, 5)}>
                                    <ListItemText inset primary="All fobs" />
                                </ListItem>
                            </Link>
                            <Link className={classes.link} to="">
                                <ListItem button className={classes.nested} 
                                    selected={this.state.selectedIndex === 6}
                                    onClick={event => this.handleListItemClick(event, 6)}>
                                    <ListItemText inset primary="Lost fobs" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>

                    {/* People item list */}  
                    <Link className={classes.link} to="/people">
                        <ListItem button 
                            selected={this.state.selectedIndex === 7}
                            onClick={event => this.handleListItemClick(event, 7)}>
                            <ListItemIcon><PeopleIcon/></ListItemIcon>
                            <ListItemText primary="People"/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link className={classes.link} to="/account">
                        <ListItem button 
                            selected={this.state.selectedIndex === 8}
                            onClick={event => this.handleListItemClick(event, 8)}>
                            <ListItemIcon><FaceIcon/></ListItemIcon>
                            <ListItemText primary="Account settings"/>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/about">
                        <ListItem button 
                            selected={this.state.selectedIndex === 9}
                            onClick={event => this.handleListItemClick(event, 9)}>
                            <ListItemIcon><AboutIcon/></ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        );
    }

};

NavigationDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
