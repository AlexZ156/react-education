'use strict';
import {
    ADD_TABLINKS,
    SELECT_LINK
} from 'actions';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TABLINKS:
            return [
                ...state,
                ...action.elems
            ];
        case SELECT_LINK:
            return state.map(item => {
                return {
                    ...item,
                    active: action.id === item.id
                };
            });
        default:
            return state;
    }
}