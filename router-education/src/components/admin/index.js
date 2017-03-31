'user strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const stateToProps = (...a) => {
    a.forEach(obj => {
        console.log('obj = > ', obj)
    })
    return {

    };
};

export default connect(stateToProps)(class Admin extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /admin</div>
            </div>
        )
    }
});
