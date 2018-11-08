import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';
import { Chip, Button, Icon, Typography } from '@material-ui/core';

const styles = theme => ({
    chip: {
        marginTop: theme.spacing.unit / 2,
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
        padding: theme.spacing.unit,
    },
});

class FilterChip extends Component {

    constructor(){
        super();
        this.state = {
            color: "default",
            clicked: false
        }
    }

    handleClick = () => {
        if(this.state.clicked == false) this.setState({clicked: true, color: "primary"});
        else this.setState({clicked: false, color: "default"});
    }

    render (){
        const { classes } = this.props;

        return (
            <Chip
                icon={this.props.icon}
                label={this.props.label}
                className={classes.chip}
                color={this.state.color}
                onClick={this.handleClick}
                clickable
            />
        )
    }
}

FilterChip.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(FilterChip);