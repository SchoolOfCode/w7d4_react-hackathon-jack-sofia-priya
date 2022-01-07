import React, { useState } from "react";

function AddTodo({ addTodo }) {
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");

	function handleChangeDescription(event) {
		setDescription(event.target.value);
	}

	function handleChangeCategory(event) {
		setCategory(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		addTodo(description, category);
		setDescription("");
		setCategory("");
	}

	return (
		<form>
			<input
				placeholder="description"
				value={description}
				onChange={handleChangeDescription}
			/>
			<input
				placeholder="category"
				value={category}
				onChange={handleChangeCategory}
			/>
			<button onClick={handleSubmit}>Add Todo</button>
			{description} {category}
		</form>
	);
}

export default AddTodo;
