import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/City';
import Login from '../containers/Login';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import User from '../containers/User';
import NotFound from '../containers/404';

class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/login(/:router)" component={Login}/>
                    <Route path="/search/:category(/:keyword)" component={Search}/>
                    <Route path="/Detail/:id" component={Detail}/>
                    <Route path="/user" component={User}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;