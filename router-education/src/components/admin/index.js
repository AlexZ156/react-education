'user strict';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

export default class Admin extends Component {
    render() {
        console.log(this)
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /admin</div>
            </div>
        )
    }
}
