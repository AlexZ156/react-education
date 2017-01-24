'use strict';
import React from 'react';
import {connect} from 'react-redux';

const stateToProps = ({preview}) => {
    return {
        preview
    };
};

const Preview = ({preview}) => {
    return (
        <div>
            {preview.demo && (
                <h1>Demo</h1>
            )}
            {preview.edit && (
                <h1>Edit</h1>
            )}
        </div>
    );
};

export default connect(stateToProps)(Preview);
