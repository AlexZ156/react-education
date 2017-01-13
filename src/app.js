import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './components/list';
import Filter from './components/filter';

const stateToProps = ({items}) => {
    return {
        items
    };
};

const dispatchToProps = (dispatch) => {
    return {
        itemAdd(id) {
             dispatch({
                type: 'ADDITEM',
                text
            })
        }
    }
};

class Todo extends Component {
	state = store.getState();

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
		store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	addItem(text, e) {
		if (e && e.keyCode !== 13 || !text.trim().length) return;
		dispatch({
			type: 'ADDITEM',
			text
		});
		this.input.value = '';
		this.input.focus();
	}
/*
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
	}*/

	render() {
		return (
			<div>
				<input type="text" ref={input => this.input = input} onKeyDown={(e) => this.addItem(this.input.value, e)}/>
				<button onClick={() => this.addItem(this.input.value)}>add</button>
				<List/>
				<Filter filter={this.state.filter} names={this.filterNames}/>
			</div>
		)
	}
};

export connect(stateToProps, dispatchToProps)(Todo);
