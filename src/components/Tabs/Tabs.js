import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tabs: {
    position: 'fixed',
    width: "100%",
    top: '216px'
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  constructor() {
    super();
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();

  }

  handleScroll = (event) => {
    const tabs = document.getElementsByClassName(this.props.classes.tabs)[0];
    const content = document.getElementById('content');
    console.log(tabs.getBoundingClientRect().width, tabs.width);
    // if (event.pageY >= 0) {
      content.style.marginTop=String(tabs.getBoundingClientRect().height + 100) + "px";
      tabs.style.width=content.getBoundingClientRect().width + "px";
    // }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.tabs}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
          {this.props.tabs.map(tab => {
            return <Tab label={tab} />
          })}
          </Tabs>
        </AppBar>
        <div id="content">
        {this.props.contents.map((content, i) => {
          return (value === i && <TabContainer>{content}</TabContainer>)
        })}
      </div>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
