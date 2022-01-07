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

  function deleteTodo(id) {
    setTodos (todos.filter(todo=>todo.id !== id))

  }

  function updateTodo(id, changes) {
    // get current id of todo 
    const foundTodo =todos.find(todo=>todo.id === id)
    const foundIndex =todos.findIndex(todo=>todo.id === id)
    const newTodo ={...foundTodo, ...changes}
    const newArray =[...todos.slice(0, foundIndex), newTodo, ...todos.slice(foundIndex+1)]
    setTodos (newArray)
    
    // updating the todo with the changes
    //replace the current todo with the new updated todo 

  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <List>
        {todos.map(function (todo) {
          return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>;
        })}
      </List>
    </div>
  );
}

export default App;
