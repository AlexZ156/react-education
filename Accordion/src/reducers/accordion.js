'use strict';
import {ACCORDION_SWITCH} from 'actions';

const accData = [
	{
		title: 'title - 1',
		content: '<h1>content 1 </h1>',
		id: `id-${Date.now() * Math.random()}`
	},
	{
		title: 'title - 2',
		content: '<h1>content 2 </h1>',
		id: `id-${Date.now() * Math.random()}`
	},
	{
		title: 'title - 3',
		content: '<h1>content 3 </h1>',
		id: `id-${Date.now() * Math.random()}`
	},
	{
		title: 'title - 4',
		content: '<h1>content 4 </h1>',
		id: `id-${Date.now() * Math.random()}`
	},
	{
		title: 'title - 5',
		content: '<h1>content 5 </h1>',
		id: `id-${Date.now() * Math.random()}`
	}
];

export default (state = accData, action) => {
	switch(action.type) {
		case ACCORDION_SWITCH:
			return state.map((item) => {
				return {
					...item,
					...{
						active: item.id === action.id ? !item.active : false
					}
				}
			});
		default:
			return state;
	}
};
