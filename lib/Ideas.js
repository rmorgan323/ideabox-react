import React, { Component } from 'react';
import Search from './Search';
import IdeaCard from './IdeaCard';

class Ideas extends Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<div>
				<Search />
				<IdeaCard />
			</div>
		)
	}
}

export default Ideas;