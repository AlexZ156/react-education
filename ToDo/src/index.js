import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Todo from './app';
import reducers from './reducers';

const store = createStore(combineReducers(reducers));

ReactDom.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
	document.getElementById('app')
)
