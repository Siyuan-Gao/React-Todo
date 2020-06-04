import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Clean Your Room',
          id: 1,
          completed: false
        },
        {
          task: 'Walk Dog',
          id: 2,
          completed: false
        },
        {
          task: 'Learn setState',
          id: 3,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    // let todos = this.state.todos.filter(todo => !todo.completed);
    // this.setState({ todos });

    this.setState(
<<<<<<< HEAD
      {todos: this.state.todos.filter( todo => !todo.completed)}
=======
      {todds: this.state.todos.filter( todo => !todo.completed)}
>>>>>>> 19f697968755e07013d4e5c5ae597bae214207dd
    )
  };

  render() {
    return (
      <div className="App">
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;