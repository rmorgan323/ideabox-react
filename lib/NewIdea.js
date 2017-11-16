import React from 'react';

const NewIdea = () => {
	return (
		<div className="new-idea-component">
			<h1>idea<span className="header-span">box</span></h1>
			<form>
				<input  className="title-input"
							  placeholder=" title" />
				<input  className="body-input"
							  placeholder=" body" />
				<button className="save-new-idea-button"
								type="submit"
				>save</button>
			</form>
		</div>
	)
}

export default NewIdea;