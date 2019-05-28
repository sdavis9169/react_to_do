import React, { Component } from 'react'

export default class Add extends Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({task: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input name='task' onChange={this.handleChange} value={this.state.task} type='text' placeholder="todo"  id='task'/>
                <button>Add Todo</button>
            </form>
        )
    }
}
