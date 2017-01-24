'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {accordionSwitch} from 'actions';

// const stateToProps = ({})
const dispatchToProps = (dispatch) => ({
	accordionSwitch(id) {
		console.log(dispatch)
		dispatch(accordionSwitch(id));
	}
})

const Item = ({accordionSwitch, item}) => {
	const switchHandler = (e, id) => {
		e.preventDefault();
		accordionSwitch(item.id);
	}

	return(
		<li className={item.active ? 'active' : ''}>
			<a href="#" onClick={(e) => {switchHandler(e)}}>{item.title}</a>
			<div style={{display: item.active ? '' : 'none'}} dangerouslySetInnerHTML={{__html: item.content}}></div>
		</li>
	);
};

export default connect(null, dispatchToProps)(Item);
