import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import RoutingApp from './RoutingApp';
import * as serviceWorker from './serviceWorker';
import { requestHostels, searchHostels } from './reducers';

import './index.css';

const rootElement = document.getElementById('root');

const logger = createLogger();

const rootReducers = combineReducers({ requestHostels, searchHostels });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RoutingApp />
    </Provider>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
