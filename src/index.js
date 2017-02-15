/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadConfiguration} from './actions/configurationActions';
import {loadEmailConfiguration} from './actions/emailConfigActions';


const store = configureStore();
store.dispatch(loadConfiguration());

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);

