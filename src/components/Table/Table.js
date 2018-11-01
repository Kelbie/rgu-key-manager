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
  table: {
  },
});

class SimpleTable extends Component {
  state = {rows: this.props.rows};
  componentDidMount() {
  }

  componentWillReceiveProps(someProps) {
    this.setState({rows: someProps.rows})
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {this.props.columns.map((column, i) => {
                return <TableCell>{column}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
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
