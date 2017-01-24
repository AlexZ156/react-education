'use strict';

export const MODULE_ON = 'MODULE_ON';
export const moduleOn = (name) => {
    return {
        type: MODULE_ON,
        name
    }
};

export const MODULE_OFF = 'MODULE_OFF';
export const moduleOff = (name) => {
    return {
        type: MODULE_OFF,
        name
    }
};

export const MODULES_RESET = 'MODULES_RESET';
export const modulesReset = () => {
    return {
        type: MODULES_RESET
    }
};

export const MODULE_DEMO = 'MODULE_DEMO';
export const moduleDemo = (module) => {
    return {
        type: MODULE_DEMO,
        module
    };
};

export const MODULE_EDIT = 'MODULE_EDIT';
export const moduleEdit = (module) => {
    return {
        type: MODULE_EDIT,
        module
    };
};
