import React, { useState } from "react";

export default function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent = "";

    // Wheter in editing mode or not.
    if(isEditing){
        taskContent = (<div>
            <input value={todo.title} onChange={e => (
                onChange({...todo, title: e.target.value})
            )} />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </div>);
    } else {
        taskContent = (<div>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} 
            onChange={e => onChange({...todo, done: e.target.checked})} />
            {taskContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}