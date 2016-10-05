/*eslint-disable import/default */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory as history } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';

import { useStrict } from 'mobx';
useStrict(true);

import { Provider } from 'mobx-react';
const stores = {};

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
