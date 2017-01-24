'use strict';
import React from 'react';
import {connect} from 'react-redux';
import Item from './item';
import {
    modulesReset
} from 'actions';

const stateToProps = ({modules, modulesStructure}) => {
    return {
        modules,
        modulesStructure
    };
};

const dispatchToProps = (dispatch) => {
    return {
        modulesReset() {
            dispatch(modulesReset());
        }
    };
};

const Sidebar = ({modules, modulesStructure, modulesReset}) => {
    return (
        <aside>
            <button className="reset" onClick={() => {modulesReset()}}>Reset</button>
            <ul>
                {modulesStructure.map(name =>(
                    <Item key={name} name={name}></Item>
                ))}
            </ul>
        </aside>
    );
};

export default connect(stateToProps, dispatchToProps)(Sidebar);
