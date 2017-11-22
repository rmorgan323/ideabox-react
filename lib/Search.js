import React, { Component } from 'react';

class Search extends Component {
	constructor() {
		super();

		this.state = {
			searchStr: ''
		}
	}

	searchInput(event) {
		let currentSearch = event.target.value.toLowerCase();
		this.props.searchCards(currentSearch)
	}

	render() {
		return (
			<div className="search-component">
				<input className="search-box"
							 placeholder=" search" 
							 onChange={this.searchInput.bind(this)}
				/>

			</div>
		)
	}
}

export default Search;
