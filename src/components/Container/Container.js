import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

// Router components
import AboutPage from '../AboutPage/AboutPage';

class Container extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </div>
        );
    }
};

export default withRouter(Container);
