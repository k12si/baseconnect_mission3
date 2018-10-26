import React, { Component } from 'react'
import './css/form.css'

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" />
                    </div>
                    <div>
                        <input type="submit" value="追加" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form