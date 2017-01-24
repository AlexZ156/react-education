'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {
    moduleOn,
    moduleOff,
    moduleDemo,
    moduleEdit
} from 'actions';

const stateToProps = ({modules}) => {
    return {
        modules
    };
};

const dispatchToProps = (dispatch) => {
    return {
        moduleOn(name) {
            dispatch(moduleOn(name));
        },
        moduleOff(name) {
            dispatch(moduleOff(name));
        },
        moduleDemo(module) {
            dispatch(moduleDemo(module));
        },
        moduleEdit(module) {
            dispatch(moduleEdit(module));
        }
    }
}

const Item = ({name, modules, moduleOn, moduleOff, moduleDemo, moduleEdit}) => {
    let item = modules[name];
    let input;

    const onChange = () => {
        if (input.checked) {
            moduleOn(name);
        } else {
            moduleOff(name);
        }
    };

    const edit = () => {
        moduleEdit(item);
    };

    const demo = () => {
        moduleDemo(item);
    };

    return(
        <li>
            <input
                type="checkbox"
                ref={(elem) => {input = elem;}}
                checked={item.active}
                onChange={() => {onChange()}}
            />
            <span>{item.title}</span>
            {item.editable && item.active && (
                <button onClick={() => {edit()}}>Edit</button>
            )}
            {item.demo && item.active && (
                <button onClick={() => {demo()}}>Demo</button>
            )}
        </li>
    )
};

export default connect(stateToProps, dispatchToProps)(Item);