import React, {Component} from 'react';
import {EE} from './app'

class Filter extends Component {
    state = {
        filter: null
    }

    doFilter(filter) {
        EE.emit('filter', filter);
    }

    setDisabled(filter) {
        try {
            return this.props.filter.toUpperCase() === filter.toUpperCase() ? {disabled: 'disabled'} : {};
        } catch(err) {
            return {};
        }
    }

    render() {
        return(
            <ul>
                {this.props.names.map((obj, index) => (
                    <li key={index}>
                        <button {...this.setDisabled(obj.id)} onClick={() => this.doFilter(obj.id)}>{obj.name}</button>
                    </li>
                ))}
            </ul>
        )
    }
};

export default Filter;