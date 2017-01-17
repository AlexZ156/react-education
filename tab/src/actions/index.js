'use strict';

export const ADD_TABLINKS = 'ADD_TABLINKS';
export const addTablinks = (elems) =>({
    type: ADD_TABLINKS,
    elems
});

export const SELECT_LINK = 'SELECT_LINK';
export const selectLink = (id) =>({
    type: SELECT_LINK,
    id
});
