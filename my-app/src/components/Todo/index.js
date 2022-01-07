import React from "react";

function Todo({ todo }) {
	const { id, description, category, isComplete } = todo;

	return (
		<li>
			<p>{description}</p>
			<h4>{category}</h4>
		</li>
	);
}

export default Todo;
