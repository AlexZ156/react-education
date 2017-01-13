'use strict';

export default (state = 'All', action) => {
    switch(action.type) {
        case 'FILTER_CHANGE':
            return action.filter;
        default:
            return state;
    }
}