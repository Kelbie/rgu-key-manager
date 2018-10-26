import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Collapse from "@material-ui/core/Collapse"; 
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import IconPerson from "./icon_person.svg";
import IconMail from "@material-ui/icons/Mail"

const styles = theme => ({
    cardHead: {
        display: 'flex',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    content: {
        width: 180,
        height: 110,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: -25,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    details: {
        marginLeft: -25,
    },
    delete: {
        marginLeft: 'auto',
    },
});

class UserCard extends Component {

    state = {
        expanded: false,
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render(){

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.cardHead}>
                    <CardMedia
                        className={classes.avatar}
                        component="img"
                        image={IconPerson}/>
                    <CardContent className={classes.content}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Name
                        </Typography>
                        <Typography component="h5" variant="h5">
                            role
                        </Typography>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton
                                className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more">
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                    </CardContent>
                </div>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <List className={classes.details} dense="true">
                        <ListItem>
                            <ListItemIcon><IconMail/></ListItemIcon>
                            <ListItemText primary="mail@rgu.ac.uk"/>
                        </ListItem>
                        </List>
                    </CardContent>
                    <CardActions className={classes.footer} disableActionSpacing>
                        <Button color="secondary" className={classes.delete}>Delete</Button>
                    </CardActions>
                </Collapse>
            </Card>
        )
    }
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);