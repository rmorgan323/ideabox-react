import React, { Component } from 'react';

class Search extends Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<div className="search-component">
				<input className="search-box"
							 placeholder=" search" />
			</div>
		)
	}
}

export default Search;