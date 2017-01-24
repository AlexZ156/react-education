'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './components/items';

const stateToProps = ({accordion}) => ({
	accordion
});

class App extends Component {
	render() {
		const items = this.props.accordion;

		return(
			<ul>
				{items.map((item, i) => (
					<Item key={i} item={item}></Item>
				))}
			</ul>
		)
	}
};

export default connect(stateToProps)(App);
