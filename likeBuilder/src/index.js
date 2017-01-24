'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store = createStore(
    combineReducers(reducers),
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
);

