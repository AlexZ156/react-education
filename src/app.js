import React, {Component} from 'react';
import Item from './item';
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

	add(text) {
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
			})
		});

		EE.on('remove', (id) => {
			this.setState({
				items: this.state.items.filter(item => {
					return item.id !== id;
				})
			})
		});
	}

	render() {
		return (
			<div>
				<input type="text" ref={input => this.input = input}/>
				<button onClick={() => this.add(this.input.value)}>add</button>
				<ul>
					{this.state.items.map((item, index) => (
						<Item key={index} data={item}/>
					))}
				</ul>
			</div>
		)
	}
};

export {Todo, EE};
