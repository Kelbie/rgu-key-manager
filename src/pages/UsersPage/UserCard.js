import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import Typography from "@material-ui/core/Typography";
import IconPerson from "@material-ui/icons/Person";
import { Button, ListItem, ListItemIcon, ListItemText, Avatar, Grid } from '@material-ui/core';

const styles = theme => ({
    card:{
        width: 310
    },
    avatar: {
        width: 100,
        height: 100,
    },
    icon: {
        width: 90,
        height: 90,
    },
    mail: {
        top: 15
    },
    grow: {
        flexGrow: 1,
    },
});

class UserCard extends Component {

    render(){

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container direction="row" alignItems="center" spacing="16">
                            <Grid item xs="5">
                                <Avatar className={classes.avatar} src={this.props.user.avatar}><IconPerson className={classes.icon}/></Avatar>
                            </Grid>
                            <Grid item xs>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="title" color="textSecondary" zeroMinWidth>
                                            {this.props.user.username}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subheading" color="textSecondary">
                                            {this.props.user.rgu_id}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subheading" color="textPrimary">
                                            {this.props.user.role}
                                        </Typography>
                                    </Grid>
                                    </Grid>
                            </Grid>
                        </Grid>
                        <ListItem className={classes.mail}>
                            <ListItemIcon><EmailIcon/></ListItemIcon>
                            <ListItemText primary={this.props.user.email} />
                        </ListItem>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Remove">
                            <DeleteIcon/>
                        </IconButton>
                        <div className={classes.grow} />
                        <Button color="primary">Edit</Button>
                    </CardActions>
            </Card>
        )
    }
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);