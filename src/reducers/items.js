'use strict';

export default (state = [], action) => {
    switch(action.type) {
        case 'ADDITEM':
            return [
                ...state,
                {
                    text: action.text,
                    id: `id-${Date.now()}`
                }
            ];
        case 'REMOVEITEM':
            return state.filter(item => item.id !== action.id);
        case 'TOGGLEITEM':
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