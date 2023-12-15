import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import { useQuery, useMutation } from 'react-query';

export default function Task() {
    // Load todos from localStorage on component mount
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) ?? []);
  const [searchTerm, setSearchTerm] = useState('');

  // Save todos to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(title) {
    setTodos([
      {
        id: Date.now(),
        title: title,
        done: false,
      },
      ...todos,
    ]);
  }

  function handleEditTodo(todoId) {
    const editedTitle = prompt(
      "Edit Task",
      todos.find((todo) => todo.id === todoId)?.title
    );

    if (editedTitle !== null && editedTitle.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, title: editedTitle } : todo
        )
      );
    }
  }

  function handleDeleteTodo(todoId) {
    // Ask for confirmation using alert
    const shouldDelete = window.confirm(
        "Are you sure you want to delete this task?"
      );

      if(shouldDelete){
    setTodos(todos.filter((todo) => todo.id !== todoId));
      }
  }

  // Filter todos based on 'searchTerm' state.
  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
    {/* Search bar */}
    <input type='search' placeholder="Search ..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}/>
      <AddTodo onAddTodo={handleAddTodo} />

      <ul>
        {/* Render filteredTodos */}
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, done: !t.done } : t
                  )
                )
              }
            />
            {/* Todo content */}
            {todo.title}
            {/* Delete a task */}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            {/* Edit a task */}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
