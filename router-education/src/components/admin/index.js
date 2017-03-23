'user strict';

import React, { Component } from 'react';

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