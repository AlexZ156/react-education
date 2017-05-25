'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const stateToProps = (...a) => {
    a.forEach(obj => {
        console.log('obj = > ', obj)
    })
    return {

    };
};


export default connect(stateToProps)(() => {
    return(
        <div>
            <h1>TEST</h1>
            <Link to="/topics">Test comp</Link>
        </div>
    );
});


