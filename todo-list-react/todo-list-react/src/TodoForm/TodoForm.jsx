import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Boş girişi engelle
    addTodo(inputValue);
    setInputValue(""); // Input alanını temizle
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni görev ekle..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Ekle
      </button>
    </form>
  );
}

export default TodoForm;
