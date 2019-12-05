import React from "react";
import Todo from "./Todo";
import "./Todo.css";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    
    return (
        <div className="todo-list">
            {props.list.map(index => {
                return (
                    <Todo task={index.task} completed={index.completed} id={index.id} key={index.id} toggleTodo={props.toggleTodo} />
                )
            })}
        </div>
    )
}

export default TodoList;
