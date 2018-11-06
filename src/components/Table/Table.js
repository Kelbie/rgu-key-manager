import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Graphics Components
import Button from '../Button/MiniButton';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    
  },
  tableHead: {
    position: "sticky",
    backgroundColor: theme.palette.common.white,
  },
  tableBody:{
    height: "75vh",
    overflow: "hidden"
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
        <Table >
          <TableHead>
            <TableRow>
                {this.props.columns.map((column, i) => {
                  return <TableCell onClick={() => this.sortTable(i)}>{column}</TableCell>
                })}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {this.state.rows.map(row => {
              return (
                <TableRow hover={true} key={row.id}>
                  {row.map((element, i) => {
                    if (i < this.props.columns.length) {
                      if (element.type == "button") {
                        return <TableCell><Button text={element.text} onClick={() => window.location.href=element.linkTo} /></TableCell>
                      } else {
                        return <TableCell>{element.text}</TableCell>
                      }

                    }

                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SimpleTable);
