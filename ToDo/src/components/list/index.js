import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemRemove, itemToggle} from 'actions';

const stateToProps = ({items, filter}) => {
    return {
        items,
        filter
    };
};

const dispatchToProps = (dispatch) => {
    return {
        itemRemove(id) {
             dispatch(itemRemove(id))
        },
        itemToggle(id) {
            dispatch(itemToggle(id))
        }
    }
};

const List = ({items, filter, itemRemove, itemToggle}) => {
    return (
        <ul>
            {items.filter(item => {
                switch (filter) {
                    case 'COMPLETED':
                        return item.completed;
                    case 'NCOMPLETED':
                        return !item.completed;
                    default:
                        return true;
                }
            }).map((item, index) => (
                <li key={index} className={item.completed ? 'completed' : ''}>
                    <span
                        onClick={() => {itemToggle(item.id)}}
                    >
                        {item.text}
                    </span>
                    <button onClick={() => {itemRemove(item.id)}}>Remove</button>
                </li>
            ))}

        </ul>
    )
};

export default connect(stateToProps, dispatchToProps)(List);
