'user strict';

import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
>>>>>>> d6e29faf2b64db9ba1600a7a3474fc004e977f0b

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
<<<<<<< HEAD
});

=======
}
>>>>>>> d6e29faf2b64db9ba1600a7a3474fc004e977f0b
