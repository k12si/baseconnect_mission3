import React, {Component} from 'react';

class Todo extends Component {

    render() {
        return (
            <li>{this.props.title}</li>
        );
    }

}

export default Todo
