import React from "react";

function Todo({ todo, deleteTodo, updateTodo}) {
	const { id, description, category, isComplete } = todo;

function handleChangeIsComplete(event) {
	updateTodo(id, {isComplete:event.target.checked})
}

	return (
		<li>
			<p>{description}</p>
			<h4>{category}</h4>
			<button onClick={()=> deleteTodo(id)}>X</button>
			<input onChange={handleChangeIsComplete} checked={isComplete} type="checkbox"/>
		</li>
	);
}

export default Todo;
