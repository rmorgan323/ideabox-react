import React, { Component } from 'react';

const qualityDisplay = ['0', 'really?', 'ummm, no', 'meh', 'sure', 'yeah!']

class IdeaCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			qualityVal: props.qualityVal
		}
	}

	editCard(event) {
		if (event.target.className === 'idea-title') {
			this.props.update(this.props.id, 'title', event.target.innerText)
		} else if (event.target.className === 'idea-body') {
			this.props.update(this.props.id, 'body', event.target.innerText)
		}
	}

	voteFunc(event) {
		if (event.target.className === 'upvote-button') {
			this.props.voteQuality(this.props.id, 'up')
		} else {
			this.props.voteQuality(this.props.id, 'down')
		}
	}

	deleteFunc() {
		this.props.deleteCard(this.props.id)
	}

	render() {
		return (
			<div className="idea-card-component">
				<div className="idea-card-heading">
					<h2 className="idea-title"
							contentEditable="true"
							onMouseOut={this.editCard.bind(this)}
					>{this.props.title}</h2>
					<a className="delete-card-button"
						 onClick={this.deleteFunc.bind(this)}
					></a>
				</div>
				<p className="idea-body"
					 contentEditable="true"
					 onMouseOut={this.editCard.bind(this)}
				>{this.props.body}</p>
				<div className="quality-component">
					<a className="upvote-button"
						 onClick={this.voteFunc.bind(this)}
					></a>
					<a className="downvote-button"
						 onClick={this.voteFunc.bind(this)}
					></a>
					<h5>quality: <span className="quality-span">{qualityDisplay[this.props.qualityVal]}</span></h5>
				</div>

				<hr className="idea-card-hr" />
			</div>
		) 
	}
}

export default IdeaCard;