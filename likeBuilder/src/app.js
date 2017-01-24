'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from './components/sidebar';
import Preview from './components/preview';

/*const stateToProps = ({modules}) => {
    return {
        modules
    }
};
*/
class Root extends Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                <Sidebar/>
                <Preview/>
            </div>
        )
    }
}

export default connect(/*stateToProps*/)(Root);
