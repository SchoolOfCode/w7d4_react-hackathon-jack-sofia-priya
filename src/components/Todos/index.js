import "./styles.css";
import React from "react";

function Todos({ children }) {
  return <ul className="todo-list">{children}</ul>;
}

export default Todos;
