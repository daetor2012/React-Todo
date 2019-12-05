import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Placeholder task',
          id: "December 3, 2019 7:14 PM EST",
          completed: false
        }
      ]
    }
  }

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  filterTodo = (event) => {
    event.preventDefault();
    let result = this.state.todos.filter(index => index.completed !== true)
    this.setState({
      todos: [...result]
    })
  }

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (todoId === item.id) {
          return {
            ...item,
            completed: !item.completed
            
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} filterTodo={this.filterTodo} />
        
      </div>
    );
  }
}

export default App;
