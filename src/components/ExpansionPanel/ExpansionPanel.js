import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '../Button/MiniButton';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SimpleExpansionPanel extends Component {
  state = {history: [{}]}
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps) {
      console.log(888, nextProps);
      this.setState({
        history: nextProps.history
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.history.map(row => {
          return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <Button onClick={() => window.location.href="/user/" + row.author.text}
                        text={row.author.text}
                        variant="flat"
                        size="small" /> assigned
                <Button onClick={() => window.location.href="/key/" + row.keyid.text}
                        text={row.keyid.text} variant="flat" size="small" /> from
                        <Button onClick={() => window.location.href="/user/" + row.from.text}
                                text={row.from.text} variant="flat" size="small" /> to
                <Button onClick={() => window.location.href="/user/" + row.to.text}
                        text={row.to.text}
                        variant="flat"
                        size="small" />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {row.comment.text}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        })}
      </div>
    );
  }
}

export default withStyles(styles)(SimpleExpansionPanel);
