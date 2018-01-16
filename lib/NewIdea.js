import React, { Component } from 'react';

class NewIdea extends Component {
	constructor() {
		super();

		this.state = {
			title: '',
			body: '',
		}

		this.handleClick = (event) => {
			event.preventDefault();
			this.props.handleSubmit(this.state.title, this.state.body)
		}

		this.inputTitle = (event) => {
			this.setState({ title: event.target.value })
		}

		this.inputBody = (event) => {
			this.setState({ body: event.target.value })
		}
	}

	render() {
		return (
			<div className="new-idea-component">
				<h1>idea<span className="header-span">box</span></h1>
				<form>
					<input  className="title-input"
								  placeholder=" title" 
								  onChange={this.inputTitle}
								  />
					<input  className="body-input"
								  placeholder=" body" 
								  onChange={this.inputBody}
								  />
					<button className="save-new-idea-button"
									type="submit"
									onClick={this.handleClick}
					>save</button>
				</form>
			</div>
		)
	}
}

export default NewIdea;