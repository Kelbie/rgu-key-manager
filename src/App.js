import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Router components
import Container from './components/Container/Container';
import WelcomePage from './components/WelcomePage/WelcomePage';

// Graphical components
import Header from './components/Header/Header';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';

// Change default theme color
import {MuiThemeProvider ,createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple as primary color
    secondary: { main: "#651fff" }, // Deeppurple as secondary color
  },
});

const styles = ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginLeft: 240,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {

  state = {
      auth: true,
  };

  render() {
    const { classes } = this.props;

    const { auth } = this.state;

    return (
      <div className={classes.app}> <MuiThemeProvider theme={theme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <CssBaseline/>

        {auth && (
          <Router className={classes.root}>
            <div>
              <Header/>
              <NavigationDrawer/>
              <div className={classes.toolbar}/>
              <div className={classes.content}>
                <Container/>
              </div>
            </div>
          </Router>
        )}
        
        {!auth && (
          <div>
            <WelcomePage/>
          </div>
        )}
      </MuiThemeProvider></div>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
