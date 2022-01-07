import "./App.css";
import { useState } from "react";

import todosData from "./libs/data";

import List from "./components/List";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(todosData);

  function addTodo(description, category) {
    const id = todos[todos.length - 1].id + 1;

    const newTodo = {
      id,
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
