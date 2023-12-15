import React, { useState } from 'react';

export default function AddTodo({ onAddTodo }){
    const [title, setTitle] = useState('');

    return(
        <div>
            <input placeholder='Add a new task'
                    onChange={e => setTitle(e.target.value)} />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add Task</button>
        </div>
    );
}