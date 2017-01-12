import React, {Component} from 'react';
import Item from './item';
import Filter from './filter';
import eventEmmiter from 'events';

class MyEmitter extends eventEmmiter {};
const EE = new MyEmitter();

class Todo extends Component {
	state = {
		items: [
			{
				text: 'first',
				completed: false,
				id: 'id-123'
			},
			{
				text: 'second',
				completed: true,
				id: 'id-321'
			}
		]
	}

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
	]

	add(text, e) {
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

	componentDidMount() {
		EE.on('toggle', (id) => {
			this.setState({
				items: this.state.items.map(item => {
					return {
						...item,
						completed: id === item.id ? !item.completed : item.completed
					}
				})
			});
		});

		EE.on('remove', (id) => {
			this.setState({
				items: this.state.items.filter(item => {
					return item.id !== id;
				})
			});
		});

		EE.on('filter', (filter) => {
			this.setState({
				filter
			});
		});
	}

	render() {
		return (
			<div>
				<input type="text" ref={input => this.input = input} onKeyDown={(e) => this.add(this.input.value, e)}/>
				<button onClick={() => this.add(this.input.value)}>add</button>
				<ul>
					{this.state.items.map((item, index) => (
						<Item key={index} data={item}/>
					)).filter(item => {
						switch (this.state.filter) {
							case 'COMPLETED':
								return item.props.data.completed;
							case 'NCOMPLETED':
								return !item.props.data.completed;
							default:
								return true;
						}
					})}
				</ul>
				<Filter filter={this.state.filter} names={this.filterNames}/>
			</div>
		)
	}
};

export {Todo, EE};
