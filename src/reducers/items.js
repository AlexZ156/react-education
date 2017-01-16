'use strict';
import {
    ITEM_REMOVE,
    ITEM_TOGGLE,
    ITEM_ADD
} from './../actions';

export default (state = [], action) => {
    switch(action.type) {
        case ITEM_ADD:
            return [
                ...state,
                {
                    text: action.text,
                    id: `id-${Date.now()}`
                }
            ];
        case ITEM_REMOVE:
            return state.filter(item => item.id !== action.id);
        case ITEM_TOGGLE:
            return state.map(item => {
                return {
                    ...item,
                    completed: item.id === action.id ? !item.completed : item.completed
                }
            });
        default:
            return state;
    }
};
