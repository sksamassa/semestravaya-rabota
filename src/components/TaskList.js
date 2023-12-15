import Task from "./Task";
import React, { useState } from 'react';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }){
    return (<ul>
        {todos.map((todo) => {
            return <li key={todo.id}>
                <Task todo={todo} 
                      onChange={onChangeTodo}
                      onDelete={onDeleteTodo} />
            </li>
        })}
    </ul>);
}