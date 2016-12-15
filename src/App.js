import React from 'react';

class App extends React.Component {
	render(){
		let txt = this.props.txt;
		let cat = this.props.cat;
		return (
			<div>
			  <h1>{txt}</h1>
			  <b>The magic number is: {cat}</b>
			</div>
		)
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'Hello World!',
	cat: 4+3
}

export default App