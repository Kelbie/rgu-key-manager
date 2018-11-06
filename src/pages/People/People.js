import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Graphics Components
import Table from '../../components/Table/Table';
import { Typography, InputBase, Toolbar, Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple } from '@material-ui/core/colors';

var people = [
  [
    {
      text: "ShonaLilly",
      role: "Super Admin",
      type: "button",
      linkTo: "user/ShonaLilly",
    },
    {
      text: 24,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "EMatheson",
      type: "button",
      role: "Admin",
      linkTo: "user/EMatheson",
    },
    {
      text: 10,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "VDawod",
      type: "button",
      role: "Admin",
      linkTo: "user/VDawod",
    },
    {
      text: 8,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "JMcCall",
      type: "button",
      role: "None",
      linkTo: "user/JMcCall",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "PHolt",
      type: "button",
      role: "None",
      linkTo: "user/PHolt",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "SRae",
      type: "button",
      role: "None",
      linkTo: "user/SRae",
    },
    {
      text: 5,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "HKalutarage",
      type: "button",
      role: "None",
      linkTo: "user/HKalutarage",
    },
    {
      text: 3,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "KHui",
      type: "button",
      role: "None",
      linkTo: "user/KHui",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "AFryer",
      type: "button",
      role: "None",
      linkTo: "user/AFryer",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "SSturley",
      type: "button",
      role: "None",
      linkTo: "user/SSturley",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "APetrovky",
      type: "button",
      role: "None",
      linkTo: "user/APetrovky",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "IArana",
      type: "button",
      role: "None",
      linkTo: "user/IArana",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "MZarb",
      type: "button",
      role: "None",
      linkTo: "user/MZarb",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "RMcDermott",
      type: "button",
      role: "None",
      linkTo: "user/RMcDermott",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "RLothian",
      type: "button",
      role: "None",
      linkTo: "user/RLothian",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "LMorison",
      type: "button",
      role: "None",
      linkTo: "user/LMorison",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "AilsaMcWhirter",
      type: "button",
      role: "None",
      linkTo: "user/AilsaMcWhirter",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "FionaMatheson",
      type: "button",
      role: "None",
      linkTo: "user/FionaMatheson",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ]
]

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
    table: {
        top: theme.spacing.unit * 5,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 5,
    }
});

class People extends Component {

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title} component="h1" variant="display2">People</Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}><SearchIcon/></div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}/>
                    </div>
                </Toolbar>
                <Table className={classes.table}
                    path="user"
                    columns={["USERNAME", "NO. OF KEYS", "NO. OF KEY FOBS"]}
                    rows={people}/>
                <Button variant="fab" className={classes.fab} color="secondary">
                    <AddIcon />
                </Button>
            </div>
        );
    }

}

People.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(People);  
