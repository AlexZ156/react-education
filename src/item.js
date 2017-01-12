import React, {Component} from 'react';
import {EE} from './app';

export const Item = props => {
	const toggle = (item) => {
		EE.emit('toggle', item.id);
	};

	const remove = (item) => {
		EE.emit('remove', item.id);
	};

	return (
		<li className={props.data.completed ? 'completed' : ''}>
			<span
				onClick={() => {toggle(props.data)}}
			>
				{props.data.text}
			</span>
			<button onClick={() => {remove(props.data)}}>Remove</button>
		</li>
	)
};