import "./styles.css";
import React from "react";

function Todo({ todo, deleteTodo, updateTodo }) {
  const { id, description, category, isComplete } = todo;

  function handleChangeIsComplete(event) {
    updateTodo(id, { isComplete: event.target.checked });
  }

  return (
    <li className="todo-item">
      <input
        onChange={handleChangeIsComplete}
        checked={isComplete}
        type="checkbox"
      />
      <p className={isComplete ? "completed" : undefined}>{description}</p>
      <h4>{category}</h4>
      <button onClick={() => deleteTodo(id)}>
        <span className="material-icons">clear</span>
      </button>
    </li>
  );
}

export default Todo;
