import React, {Component} from 'react';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

// Graphics Components
import { Paper, ListSubheader, List, ListItem, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxHeight: "75vh",
    overflowX: "auto"
  },
  header: {
    backgroundColor: theme.palette.common.white
  },
  item: {
    textAlign: "center"
  }
});

class SimpleTable extends Component {
  state = {sortBy: 0, asc: false, rows: this.props.rows};
  componentDidMount() {
  }

  componentDidMount() {
    this.sortTable(0);
  }

  componentWillReceiveProps(someProps) {
    console.log(someProps);
    console.log(this.state.rows);
    this.setState({rows: someProps.rows})
  }

  sortTable = (i) => {
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
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <List>
            <ListSubheader className={classes.header}>
                <Grid container spacing={12}>
                  {this.props.columns.map((column, i) => {
                    return <Grid className={classes.item} item xs={4} onClick={() => this.sortTable(i)}>{column}</Grid>
                  })}
                </Grid>
            </ListSubheader>
            {this.state.rows.map(row => {
              return (
                <ListItem hover={true} key={row.id}>
                    <Grid container spacing={12}>
                      {row.map((element, i) => {
                        if (i < this.props.columns.length) {
                          return <Grid className={classes.item} item xs={4}>{element.text}</Grid>
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
