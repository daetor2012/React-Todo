import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            id: Date.now(),
            completed: false
        }
    }

    changeHandler = event => {
        this.setState({
            task: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({ task: "" });
        
    }



    render() {
        return (
            <>   
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="todoText" value={this.state.task} onChange={this.changeHandler} />
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={this.props.filterTodo}>
                    <button type="submit">Clear Completed</button>
                </form>
            </>
        )
    }
}

export default TodoForm;