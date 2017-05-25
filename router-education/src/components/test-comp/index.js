'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    componentDidMount() {
    }
    render() {
        return(
            <div>
                <h1>Test</h1>
                <Link to="/about">dfgdfgfdg</Link>
            </div>
        )
    }
}