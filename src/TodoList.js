import React, {Component} from 'react';
import Todo from './Todo';


class TodoList extends Component {

    render() {
         const todos = this.props.todos.map((todo, i) =><Todo key={i} {...todo}/>)

        // const todos = this.props.todos.title
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default TodoList