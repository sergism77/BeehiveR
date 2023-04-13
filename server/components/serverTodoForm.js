//this is the serverTodoForm.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';
import { createTodo, updateTodo } from '../actions/todos';

class serverTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            done: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.todo) {
            this.props.updateTodo({
                ...this.props.todo,
                ...this.state
            });
        } else {
            this.props.createTodo({
                ...this.state
            });
        }
        this.setState({
            text: '',
            done: false
        });
    }
    render() {
        const { text, done } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                />
                <input
                    type="checkbox"
                    name="done"
                    checked={done}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

        console.log(ownProps.params.id);
        console.log(state.todos);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTodo: (todo) => {
            dispatch(createTodo(todo));
        },
        updateTodo: (todo) => {
            dispatch(updateTodo(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(serverTodoForm);

