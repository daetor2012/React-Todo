import React from "react";
import "./Todo.css";

const Todo = props => {

    

    return (
        <div className={`task${props.completed ? " completed" : ""}`} onClick={() => props.toggleTodo(props.id)}>
            <h4>Task: {props.task}</h4>
        </div>
    )
}

export default Todo;