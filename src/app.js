import React, {Component} from 'react';
import {Item} from './item';
import {Filter} from './filter';
import eventEmmiter from 'events';

class MyEmitter extends eventEmmiter {};
const EE = new MyEmitter();

class Todo extends Component {
	state = {
		items: []
	};

	filterNames = [
		{
			id: 'All',
			name: 'All'
		},
		{
			id: 'COMPLETED',
			name: 'Completed'
		},
		{
			id: 'NCOMPLETED',
			name: 'Not Completed'
		}
	];

	componentDidMount() {
		EE.on('toggle', (id) => {
			this.toggleItem(id);
		});

		EE.on('remove', (id) => {
			this.removeItem(id);
		});

		EE.on('filter', (filter) => {
			this.doFilter(filter);
		});
	}

	addItem(text, e) {
		if (e && e.keyCode !== 13 || !text.trim().length) return;
		this.setState({
			items: [
				{
					text,
					id: `id-${Date.now()}`
				},
				...this.state.items
			]
		});
		this.input.value = '';
		this.input.focus();
	}

	toggleItem(id) {
		this.setState({
			items: this.state.items.map(item => {
				return {
					...item,
					completed: id === item.id ? !item.completed : item.completed
				}
			})
		});
	}

	removeItem(id) {
		this.setState({
			items: this.state.items.filter(item => {
				return item.id !== id;
			})
		});
	}

	doFilter(filter) {
		this.setState({filter});
	}

	render() {
		return (
			<div>
				<input type="text" ref={input => this.input = input} onKeyDown={(e) => this.addItem(this.input.value, e)}/>
				<button onClick={() => this.addItem(this.input.value)}>add</button>
				<ul>
					{this.state.items.filter(item => {
						switch (this.state.filter) {
							case 'COMPLETED':
								return item.completed;
							case 'NCOMPLETED':
								return !item.completed;
							default:
								return true;
						}
					}).map((item, index) => (
						<Item key={index} data={item}/>
					))}
				</ul>
				<Filter filter={this.state.filter} names={this.filterNames}/>
			</div>
		)
	}
};

export {Todo, EE};
