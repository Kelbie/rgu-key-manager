import React, {Component} from 'react';
import { Link } from "react-router-dom";

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

// Graphics Components
import { Paper, ListSubheader, List, ListItem, Grid, Icon, LinearProgress } from '@material-ui/core';
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import Button from '../Button/MiniButton';

const styles = theme => ({
  root: {
    width: '100%',
    maxHeight: '75vh',
    overflowX: "auto",
  },
  header: {
    backgroundColor: theme.palette.common.white
  },
  item: {
    textAlign: "center"
  }
});

class SimpleTable extends Component {
  state = {
    sortBy: 0, 
    asc: false, 
    rows: this.props.rows,
    loading: true
  }

  componentDidMount() {
    this.sortTable(0);
  }

  componentWillReceiveProps(someProps) {
    this.setState({rows: someProps.rows})
  }

  sortTable = (i) => {
    this.setState({loading: true});
    this.setState({
      sortBy: i,
      asc: !this.state.asc
    })
    var that = this;
    this.setState({
      rows: this.state.rows.sort(function(a, b) {
        if (that.state.asc) {
          return a[i].text < b[i].text
        } else {
          return a[i].text > b[i].text
        }
      })
    })
    this.setState({loading: false});
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <List>
            <ListSubheader className={classes.header}>
                <Grid container>
                  {this.props.columns.map((column, i) => {
                    return <Grid className={classes.item} item xs onClick={() => this.sortTable(i)}>{column}</Grid>
                  })}
                </Grid>
            </ListSubheader>
            {this.state.loading && <LinearProgress />}
            {this.state.rows.map(row => {
              return (
                <ListItem hover={true} key={row.id}>
                    <Grid container>
                      {row.map((element, i) => {
                        if (i < this.props.columns.length) {
                          if (element.type == "button") {
                            if (element.text == "root") {
                              return <Grid className={classes.item} item xs><Button component={Link} to={element.linkTo}/></Grid>
                            } else {
                              return <Grid className={classes.item} item xs><Button text={element.text} component={Link} to={element.linkTo}/></Grid>
                              
                            }
                          } else if (element.type == "check") {
                            return <Grid className={classes.item} item xs>{element.lost ? <Icon><CheckBoxIcon color="primary"/></Icon> : <Icon><CheckBoxOutlineIcon color="primary"/></Icon>}</Grid>
                          } else{
                            return <Grid className={classes.item} item xs>{element.text}</Grid>
                          }
                        }
                      })}
                    </Grid>
                </ListItem>
              );
            })}
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(SimpleTable);
