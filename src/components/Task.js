import React, { useState } from "react";
import AddTodo from "./AddTodo";

export default function Task() {
  const [todos, setTodos] = useState([]);

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
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
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
