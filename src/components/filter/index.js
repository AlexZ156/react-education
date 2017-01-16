import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterChange} from 'actions';

const stateToProps = ({filter}) => ({filter});

const dispatchToProps = dispatch => {
    return {
        filterChange(filter) {
            dispatch(filterChange(filter))
        }
    };
};

const Filter = ({filter, filterChange}) => {
    const filterNames = [
        {
            id: 'All',
            name: 'All'
        },
        {
            id: 'COMPLETED',
            name: 'Completed'
        },
        {
            id: 'NCOMPLETED',
            name: 'Not Completed'
        }
    ];
     const setDisabled = (filterId) => {
        try {
            return filter.toUpperCase() === filterId.toUpperCase() ? {disabled: 'disabled'} : {};
        } catch(err) {
            return {};
        }
    };

    return(
        <ul>
            {filterNames.map((obj, index) => (
                <li key={index}>
                    <button
                        {...setDisabled(obj.id)}
                        onClick={() => filterChange(obj.id)}
                    >
                        {obj.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default connect(stateToProps, dispatchToProps)(Filter);
