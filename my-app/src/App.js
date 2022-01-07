import "./App.css";

import todosData from "./libs/data";

import List from "./components/List";
import Todo from "./components/Todo";
import { useState } from "react";
import AddTodo from "./components/AddTodo";

function App() {
	const [todos, setTodos] = useState(todosData);

	function addTodo(description, category) {
		const newTodo = {
			id: todos[todos.length - 1].id + 1,
			description,
			isComplete: false,
			category,
		};
		setTodos((oldValue) => [...oldValue, newTodo]);
	}

	return (
		<div>
			<AddTodo addTodo={addTodo} />
			<List>
				{todos.map(function (todo) {
					return <Todo todo={todo} key={todo.id} />;
				})}
			</List>
		</div>
	);
}

export default App;
