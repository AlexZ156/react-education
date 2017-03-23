import React, { Component } from 'react';
import Router, { Link } from 'react-router';

console.log('Router == > ', Router)
console.log('Link == > ', Link)
export default class App extends Component {
    render() {
        console.log(this)
        return (
            <div className='container'>
                <h1>App</h1>
                <ul>
                   
                </ul>
            </div>
        )
    }
}