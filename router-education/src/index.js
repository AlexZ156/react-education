'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Admin from './components/Admin';
import Genre from './components/Genre';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                <li><NavLink to="/admin" activeClassName="selected">Admin</NavLink></li>
                <li><NavLink to="/genre" activeClassName="selected">Genre</NavLink></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path='/admin' component={Admin} />
            <Route path='/genre' component={Genre} />
        </div>
    </Router>,
    document.getElementById('app')
);
