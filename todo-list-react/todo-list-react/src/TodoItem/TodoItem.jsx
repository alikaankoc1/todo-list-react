import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(todo.id)} className="todo-text">
        {todo.text}
      </span>
      <div className="todo-buttons">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="complete-btn"
        >
          {todo.isCompleted ? "Geri Al" : "Tamamlandı"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          Sil
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
