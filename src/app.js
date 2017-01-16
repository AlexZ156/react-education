import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './components/list';
import Filter from './components/filter';
import {itemAdd} from 'actions';

const stateToProps = ({items}) => {
    return {
        items
    };
};

const dispatchToProps = (dispatch) => {
    return {
        itemAdd(text) {
             dispatch(itemAdd(text))
        }
    }
};

class Todo extends Component {
	render() {
		const {items, itemAdd} = this.props;

		return (
			<div>
				<input type="text" ref={input => this.input = input} />
				<button onClick={() => itemAdd(this.input.value)}>add</button>
				<List/>
				<Filter/>
			</div>
		)
	}
};

export default connect(stateToProps, dispatchToProps)(Todo);
