import React, { useState } from "react";

import TodoForm from "./TodoForm/TodoForm.jsx";

import TodoList from "./TodoList/TodoList.jsx";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  // Yeni görev ekleme
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Benzersiz bir kimlik (ID)
      text: text,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Görevin tamamlanma durumunu değiştirme
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Görevi silme
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Yapılacaklar Listesi</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
