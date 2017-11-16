import './normalize.css';
import './App.css';
import React, { Component } from 'react';
import NewIdea from './NewIdea';
import Ideas from './Ideas';

class App extends Component {
	constructor () {
		super();

		// this.state = {

		// }
	}

	render() {
		return (
			<div>
				<NewIdea />
				<Ideas />
			</div>
		)
	}
}

export default App;