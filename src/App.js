import "normalize.css";
import "./App.css";
import { useState } from "react";

import todosData from "./libs/data";

import Todos from "./components/Todos";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(todosData);

  function generateId() {
    const lastTodo = todos[todos.length - 1];
    return lastTodo ? lastTodo.id + 1 : 1;
  }

  function addTodo(description, category) {
    const id = generateId();

    const newTodo = {
      id,
      description,
      isComplete: false,
      category,
    };

    setTodos((oldValue) => [...oldValue, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(id, changes) {
    setTodos((oldValue) => {
      const foundTodo = oldValue.find((todo) => todo.id === id);
      const foundIndex = oldValue.findIndex((todo) => todo.id === id);

      const newTodo = { ...foundTodo, ...changes };

      const newArray = [
        ...oldValue.slice(0, foundIndex),
        newTodo,
        ...oldValue.slice(foundIndex + 1),
      ];

      return newArray;
    });
  }

  return (
    <div className="container">
      <AddTodo addTodo={addTodo} />
      <Todos>
        {todos.map(function (todo) {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </Todos>
    </div>
  );
}

export default App;
