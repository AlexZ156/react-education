import React, {Component} from 'react';
import {connect} from 'react-redux';

const stateToProps = ({filter}) => ({filter});

const dispatchToProps = dispatch => {
    return {
        doFilter(filter) {
            dispatch({
                type: 'FILTER_CHANGE',
                filter
            })
        } 
    };
};

const Filter = ({filter, doFilter, names}) => {
     const setDisabled = (filterId) => {
        try {
            return filter.toUpperCase() === filterId.toUpperCase() ? {disabled: 'disabled'} : {};
        } catch(err) {
            return {};
        }
    };

    return(
        <ul>
            {names.map((obj, index) => (
                <li key={index}>
                    <button {...setDisabled(obj.id)} onClick={() => doFilter(obj.id)}>{obj.name}</button>
                </li>
            ))}
        </ul>
    );
};

export default connect(stateToProps, dispatchToProps)(Filter);