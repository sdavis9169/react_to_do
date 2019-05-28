import React, { Component } from 'react'
import Todo from './Components/Todo';
import Add from './Components/Add';


export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [{task: 'walk the dog'}, {task: 'walk the dog'}]
    }
    this.create = this.create.bind(this);
  }

  create(add){
    this.setState ({
        todos: [...this.state.todos, add]
    })
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task}/>
    })
    return (
      <div>
        <h1>Todo List!</h1>
        <Add createTodo={this.create}/>
        <ul>{todos}</ul>
      </div>
    )
  }
}
