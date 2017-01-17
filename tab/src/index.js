'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import Tabs from './components/app';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
    <Provider store={store}>
        <Tabs/>
    </Provider>,
    document.getElementById('app')
);