import "./styles.css";
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
    <form className="add-todo">
      <input
        placeholder="Description"
        value={description}
        onChange={handleChangeDescription}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={handleChangeCategory}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  );
}

export default AddTodo;
