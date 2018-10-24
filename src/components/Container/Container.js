import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

// Router components
import AboutPage from '../../pages/AboutPage/AboutPage';
import User from '../../objects/User/User';
import Key from '../../objects/Key/Key';
import Place from '../../objects/Place/Place';

class Container extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/user/:username" component={User}/>
                    <Route path="/key/:keyid" component={Key}/>
                    <Route path="/place/:place" component={Place}/>
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </div>
        );
    }
};

export default withRouter(Container);
