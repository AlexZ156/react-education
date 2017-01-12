import React, {Component} from 'react';
import {EE} from './app'

export const Filter = props => {
    const doFilter = (filter) => {
        EE.emit('filter', filter);
    };

    const setDisabled = (filter) => {
        try {
            return props.filter.toUpperCase() === filter.toUpperCase() ? {disabled: 'disabled'} : {};
        } catch(err) {
            return {};
        }
    };

    return(
        <ul>
            {props.names.map((obj, index) => (
                <li key={index}>
                    <button {...setDisabled(obj.id)} onClick={() => doFilter(obj.id)}>{obj.name}</button>
                </li>
            ))}
        </ul>
    );
};