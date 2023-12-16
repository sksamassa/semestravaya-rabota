import React, { useState } from "react";
import '../styles/AddTodo.css';
import { MdAddTask } from "react-icons/md";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(evt) {
    // Prevent the default behavior of submission
    evt.preventDefault();

    const newTitle = prompt("Add a new Task");

    // Check if the user clicked 'cancel' or provided an empty title
    if (newTitle !== null && newTitle.trim() !== "") {
      console.log(newTitle);
      onAddTodo(newTitle);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit"><MdAddTask className="task-add"/></button>
      </form>
    </div>
  );
}
