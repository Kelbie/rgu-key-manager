import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class SimpleTable extends Component {
  state = {sortBy: 0, asc: true, rows: this.props.rows};
  componentDidMount() {
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {this.props.columns.map((column, i) => {
                return <TableCell onClick={() => {
                    this.setState({sortBy: i, asc: !this.state.asc})
                    var that = this;
                    this.setState({rows: this.state.rows.sort(function(a, b) {
                      if (that.state.asc) {
                        return a[i]<b[i]
                      } else {
                        return a[i]>b[i]
                      }

                    })})}}>{column}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow hover={true} key={row.id}>
                  {row.map((element, i) => {
                    if (i <= this.props.columns.length) {
                      return <TableCell>{element}</TableCell>
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
