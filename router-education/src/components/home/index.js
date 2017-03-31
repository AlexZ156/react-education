'use strict';

import React, { Component } from 'react';
import Test from './test';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    componentDidMount() {
    }
    render() {
        return(
            <div>
                <h1>Home</h1>
                <Link to="./about">dfgdfgfdg</Link>
                <Test/>
            </div>
        )
    }
}