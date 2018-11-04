import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";
import IconPerson from "./icon_person.svg";

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
                        <Typography variant="title" color="textSecondary">
                            Name
                        </Typography>
                        <Typography variant="subheading" color="textSecondary">
                            mail
                        </Typography>
                        <Typography variant="subheading" color="textPrimary">
                            role
                        </Typography>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton
                                onClick={this.handleExpandClick}
                                aria-label="Remove">
                                <DeleteIcon/>
                            </IconButton>
                        </CardActions>
                    </CardContent>
                </div>
            </Card>
        )
    }
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);