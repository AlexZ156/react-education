import React, {Component} from 'react';
import {EE} from './app';

class Item extends Component {
	toggle(item) {
		EE.emit('toggle', item.id);
	}

	remove(item) {
		EE.emit('remove', item.id);
	}

	render() {
		return(
			<li className={this.props.data.completed ? 'completed' : ''}>

				<span
					onClick={() => {this.toggle(this.props.data)}}
				>
					{this.props.data.text}
				</span>
				<button onClick={() => {this.remove(this.props.data)}}>Remove</button>
			</li>
		)
	}
};

export default Item;
