import React from 'react';
import propTypes from 'prop-types';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import "./static/css/common.less";
import './static/css/font.css';


import RouterMap from './router/routerMap';

const store = configureStore();

render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);
