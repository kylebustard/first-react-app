import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			txt: 'this is the state text',
			cat: 3
		}
	}
	update( e ){
		this.setState({txt: e.target.value})
	}
	render(){
		let txt = this.props.txt;
		let cat = this.props.cat;
		return (
			<div>
			  <input type='text'
			  onChange={this.update.bind(this)}/>
			  <h1>{txt}</h1>
			{/* text state is changed, not cat */}
			  <h2>{this.state.txt} - {this.state.cat}</h2><br/><br/>
			  <b>The magic number is: {cat}</b><br/><br/>
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