'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TabLinks from './tabs/tablinks';
import TabContent from './tabs/tab-contents';
import {addTablinks} from 'actions';

const stateToProps = ({tablinks}) => ({
    tablinks
});

const dispatchToProps = (dispatch) => ({
    addTablinks(elems) {
        dispatch(addTablinks(elems))
    }
})

class Tabs extends Component {
    componentDidMount() {
        this.props.addTablinks([
            {
                link: 'link - 1',
                id: 'tab-1',
                content: '<h1>Tab - 1</h1>',
                active: true
            },
            {
                link: 'link - 2',
                id: 'tab-2',
                content: '<h1>Tab - 2</h1>'
            },
            {
                link: 'link - 3',
                id: 'tab-3',
                content: '<h1>Tab - 3</h1>'
            }
        ])
    }
    render() {
        return(
            <div>
                <TabLinks/>
                <TabContent/>
            </div>
        )
    }
};

export default connect(stateToProps, dispatchToProps)(Tabs);
