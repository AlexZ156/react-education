import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import News, {Add} from './news';

class Root extends Component{
	state = {
		myNews: [{
			author: 'Саша Печкин',
			text: 'В четчерг, четвертого числа...',
			bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
		}, {
			author: 'Просто Вася',
			text: 'Считаю, что $ должен стоить 35 рублей!',
			bigText: 'А евро 42!'
		}, {
			author: 'Гость',
			text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
			bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
		}]
	};
	add(obj) {
		this.setState({
			myNews: [
				...this.state.myNews,
				obj
			]
		})
		console.log(this.state)
		console.log(obj)
	}

	render() {
		return(
			<div>
				<h1>1asdsad3</h1>
				<Add data={(obj) => this.add(obj)}></Add>
				<News data={this.state.myNews}></News>
			</div>
		)
	}
};

export default Root;

