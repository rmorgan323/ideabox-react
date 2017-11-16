import React from 'react';
import Quality from './Quality';

const IdeaCard = () => {
	return (
		<div className="idea-card-component">
			<div className="idea-card-heading">
				<h2>example idea</h2>
				<a className="delete-card-button"></a>
			</div>
			<p>some gibberish just to fill some space on the page would help me to see what is actually happening.  oh my.</p>
			<Quality />
			<hr className="idea-card-hr" />
		</div>
		)
}

export default IdeaCard;