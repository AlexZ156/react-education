import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Item extends Component {
	static propTypes = {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	};

	state = {
		visible: false
	}

	toggleHandler() {
		this.setState({
			visible: !this.state.visible
		});
	}

	render() {
		return(
			<div>
				<h3>{this.props.data.author}</h3>
				<p>{this.props.data.text}</p>
				<button onClick={() => this.toggleHandler()}>More</button>
				<p style={{'display': this.state.visible ? '' : 'none'}}>{this.props.data.bigText}</p>
			</div>
		)
	}
};


class News extends Component {
	render() {
		return(
			<div>
				{this.props.data.map((item, index) => (
					<Item key={index} data={item} />
				))}
			</div>
		)
	}
};

class Add extends Component {
	add(e, {author, text, bigText}) {
		e.preventDefault();
		this.props.data({
			author: author.value,
			text: text.value,
			bigText: bigText.value
		});
	}
	render() {
		return(
			<form>
				<input
					type="text"
					defaultValue=""
					ref={input => this.author = input}
				/>
				<hr/>
				<textarea
					defaultValue=""
					ref={textarea => this.text = textarea}
				></textarea>
				<br/>
				<textarea
					defaultValue=""
					ref={textarea => this.bigText = textarea}
				></textarea>
				<br/>
				<button onClick={(e) => this.add(e, this)}>Add</button>
			</form>
		)
	}
}

export default News;
export {Add};
