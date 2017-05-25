'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {selectLink} from 'actions';
import styles from './style.scss';

console.log('styles == >', styles)

const stateToProps = ({tabset}) => ({
    tabset
});

const dispatchToProps = (dispatch) => ({
    selectLink(id) {
        dispatch(selectLink(id));
    }
})

const TabLinks = ({tabset, selectLink}) => {
    const switchHandler = (e, item) => {
        e.preventDefault();
        selectLink(item.id);
    };

    return(
        <ul>
            {tabset.map((item, i) => (
                <li
                    key={item.id}
                     className={item.active ? 'active' : ''}
                >
                    <a href={`#${item.id}`} onClick={(e) => switchHandler(e, item)}>{item.link}</a>
                </li>
            ))}
        </ul>
    )
};

export default connect(stateToProps, dispatchToProps)(TabLinks);