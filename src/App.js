import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Router components
import Container from './components/Container/Container';
import WelcomePage from './pages/WelcomePage/WelcomePage';

// Firebase initialisation
import {auth, firestore} from "./components/Firebase/Firebase";

// Graphical components
import Header from './components/Header/Header';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';

// Change default theme color
import {MuiThemeProvider ,createMuiTheme} from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors';
import zIndex from '@material-ui/core/styles/zIndex';
const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple as primary color
    secondary: { main: "#d50000" }, // Red as secondary color
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
  p: {
    zIndex: 100,
  }
});

class App extends Component {

  state = {
      signed: undefined,
      authUser: {
        email: "",
        rgu_id: "",
        role: "",
        username: ""
      },
  };
  
  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        firestore.collection("users").doc(user.uid).get().then(doc => {
          this.setState({
            signed: true,
            authUser: {
              email: doc.data().email,
              rgu_id: doc.data().rgu_id,
              role: doc.data().role,
              username: doc.data().username,
            },
          });
        })
      } else {
        this.setState({
          signed: false,
          authUser: null
        });
      }
    });
  }

  render() {
    const { classes } = this.props;

    const { signed } = this.state;

    return (
      <div className={classes.app}> <MuiThemeProvider theme={theme}>
        <CssBaseline/>

        {signed == true && (
          <Router className={classes.root}>
            <div>
              <Header authUser={this.state.authUser}/>
              <NavigationDrawer/>
              <div className={classes.toolbar}/>
              <div className={classes.content}>
                <Container/>
              </div>
            </div>
          </Router>
        )}

        {signed == false && (
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
