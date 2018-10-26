import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'

class App extends Component {

    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = e.target.title.value;
        const todos = this.state.todos.slice()

        if(title!='') {

            todos.push({
                title: title,
            });

        }

        this.setState({ todos })

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