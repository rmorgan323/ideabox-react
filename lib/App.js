import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import NewIdea from './NewIdea';
import Search from './Search';
import IdeaCard from './IdeaCard';

class App extends Component {
	constructor() {
		super();

		this.state = {
			ideaArray: []
		}
	}

	componentDidMount() {
		if (localStorage.length > 0) {
			let storageArray = this.state.ideaArray;
			Object.keys(localStorage).forEach(id => {
				let newIdea = JSON.parse(localStorage.getItem(id));
				storageArray.push(newIdea);
			});
			this.setState({ideaArray: storageArray})
		}
	}

	createCard(title, body, qualityVal = 1) {
		let newCard = {
			id: Date.now(),
			title: title,
			body: body,
			qualityVal: qualityVal
		}

		let buildingIdeaArray = this.state.ideaArray;
		buildingIdeaArray.push(newCard)
		this.setState({ideaArray: buildingIdeaArray})

		localStorage.setItem((newCard.id).toString(), JSON.stringify(newCard));
	}

	voteQuality(id, direction) {
		let allIdeas = this.state.ideaArray;
		let qualityIndex = allIdeas.findIndex(idea => idea.id === id)
		let x = allIdeas[qualityIndex].qualityVal;

		if (direction === 'up' && x < 5) {
			x += 1;
		} else if (direction === 'down' && x > 1) {
			x -= 1;
		}
		allIdeas[qualityIndex].qualityVal = x;

		this.setState({ideaArray: allIdeas})
		this.updateCard(id, 'qualityVal', x)
	}

	updateCard(id, updateType, newValue) {
		let updatedCard = JSON.parse(localStorage.getItem(id));
		updatedCard[updateType] = newValue;
		localStorage.setItem(id, JSON.stringify(updatedCard))
	}

	deleteCard(id) {
		let allIdeas = this.state.ideaArray;
		let minusOne = allIdeas.filter(idea => {
			return idea.id !== id
		})
		this.setState({ideaArray: minusOne})
		localStorage.removeItem(id)
	}

	getLocalStorage() {
		let allIdeas = []
		Object.keys(localStorage).forEach(id => {
			let newIdea = JSON.parse(localStorage.getItem(id));
			allIdeas.push(newIdea);
		});
		this.setState({ideaArray: allIdeas})
		return allIdeas
	}

	filterCards(str) {
		let allIdeas = this.getLocalStorage()

		let filteredArray = allIdeas.filter((idea) => {
			if (idea.title.toLowerCase().includes(str) || idea.body.toLowerCase().includes(str)) {
				return idea
			}
		})

		this.setState({ideaArray: filteredArray})
  }

	render() {
		return (
			<div>
				<NewIdea handleSubmit={this.createCard.bind(this)} />
				<Search searchCards={this.filterCards.bind(this)}/>
				{ 
					(
						this.state.ideaArray.map((idea, index) => {
							return <IdeaCard 	id={idea.id}
																title={idea.title}
															 	body={idea.body}
															 	qualityVal={idea.qualityVal}
															 	voteQuality={this.voteQuality.bind(this)}
															 	deleteCard={this.deleteCard.bind(this)}
															 	update={this.updateCard.bind(this)}
															 	key={index}
							/>
						})
					) 
				}
			</div>
		)
	}

}

export default App;
