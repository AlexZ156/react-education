'use strict';
import {
    MODULE_ON,
    MODULE_OFF,
    MODULES_RESET,
    MODULE_DEMO,
    MODULE_EDIT
} from 'actions';

const modules = {
    'open-close': {
        title: 'Open close',
        editable: true,
        demo: true,
        options: {
            
        }
    },
    'carousel': {
        title: 'Carousel',
        editable: true,
        demo: true
    }
};

const modulesStructure = [
    'carousel',
    'open-close'
];

export default {
    modules(state = modules, action) {
        switch (action.type) {
            case MODULE_ON:
                return {
                    ...state,
                    [action.name]: {
                        ...state[action.name],
                        active: true
                    }
                };
            case MODULE_OFF:
                return {
                    ...state,
                    [action.name]: {
                        ...state[action.name],
                        active: false
                    }
                };
            case MODULES_RESET:
                let resultObj = {};

                Object.keys(state).forEach(name => {
                    resultObj[name] = {
                        ...state[name],
                        active: false
                    }
                })

                return resultObj;
            default:
                return state;
        }
        return state;
    },

    modulesStructure(state = modulesStructure, action) {
        return state;
    },

    preview(state = {}, action) {
        switch (action.type) {
            case MODULE_EDIT:
                return {
                    // ...state,
                    ...action.module,
                    edit: true,
                    demo:false
                };
            case MODULE_DEMO:
                return {
                    // ...state,
                    ...action.module,
                    demo: true,
                    edit: false
                };
            case MODULES_RESET:
                return {
                    
                };
            default:
                return state;
        }
    }
};
