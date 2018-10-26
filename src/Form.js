import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input name="title" type="text" />
                <input type="submit" value="追加" />
            </form>
        )
    }
}

export default Form