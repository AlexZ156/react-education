'use strict';

import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        console.log('home page')
    }
    render() {
        return(
            <h1>Home</h1>
        )
    }
}