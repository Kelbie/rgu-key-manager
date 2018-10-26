import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '../Button/HeaderButton';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>








      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><Button onClick={() => window.location.href="/user/Person1"} text={"Person1"} variant="flat" size="small" /> assigned <Button onClick={() => window.location.href="/key/123"} text={"123"} variant="flat" size="small" />  to <Button onClick={() => window.location.href="/user/Person2"} text={"Person2"} variant="flat" size="small" /> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
