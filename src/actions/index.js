'use strict';

export const ITEM_REMOVE = 'ITEM_REMOVE';
export const itemRemove = (id) =>({
    type: ITEM_REMOVE,
    id
});

export const ITEM_TOGGLE = 'ITEM_TOGGLE';
export const itemToggle = (id) =>({
    type: ITEM_TOGGLE,
    id
});

export const ITEM_ADD = 'ITEM_ADD';
export const itemAdd = (text) => ({
    type: ITEM_ADD,
    text
});

export const FILTER_CHANGE = 'FILTER_CHANGE';
export const filterChange = (filter) => ({
	type: FILTER_CHANGE,
	filter
})
