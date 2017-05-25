'user strict';

import React, { Component } from 'react';
import TestComp from './../test-comp';
import { Route, Link } from 'react-router-dom'

export default class Genre extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /genre</div>
                <Link to="/topics/test-component">Test comp</Link>
                <Route path="/topics/:id" component={TestComp}/>
            </div>
        )
    }
};