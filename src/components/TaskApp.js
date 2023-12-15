import TaskList from "./TaskList";
import AddTodo from "./AddTodo";
import React, { useState } from "react";

export default function TaskApp(){
    const [todos, setTodos] = useState([]);

    function handleAddTodo(title){
        setTodos([
            ...todos,
            {id: Date.now(), 
            title: title,
            done: false}
        ]);
    }

    function handleChangeTodo( nextTodo ){
        setTodos(todos.map(todo => {
            if(nextTodo.id === todo.id){
                return nextTodo;
            } else {
                return todo;
            }
        }))
    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter(todo => {
            return todo.id !== todoId
        }))
    }

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList todos={todos}
                      onChangeTodo={handleChangeTodo}
                      onDeleteTodo={handleAddTodo} />
        </div>
    );
}