import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'
// import './css/App.css'


class App extends Component {

    constructor() {
        super()
        const todos = []
        this.state = {
            todos: todos,
            // countTodo: todos.length + 1,
        }
    }

    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        const title = e.target.title.value;
        const todos = this.state.todos.slice()
        // const countTodo = this.state.countTodo

        todos.push({
            // id: countTodo,
            title: title,
            done: false,
        });

        this.setState({ todos })
        // this.setState({ countTodo: countTodo + 1 })


        e.target.title.value = '';
    }


    render() {
        return (
            <div className="app">
                <h1>Todoリスト</h1>
                <TodoList todos={this.state.todos} />
                <Form handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

export default App