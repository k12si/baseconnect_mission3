import React, {Component} from 'react';
import Todo from './Todo';


class TodoList extends Component {

    render() {
         const todos = this.props.todos.map(todo =>
             <Todo
                 key={todo.title}
                 {...todo}
             />
         )

        // const todos = this.props.todos.title
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default TodoList