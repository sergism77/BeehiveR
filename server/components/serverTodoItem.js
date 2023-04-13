//this is the serverTodoItem.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todos';

class serverTodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.deleteTodo({
            ...this.props.todo
        });
    }
    render() {
        const { text, done } = this.props.todo;
        return (
            <li>
                <span>{text}</span>
                <span>{done}</span>
                <button onClick={this.handleDelete}>Delete</button>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
            

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todo) => {
            dispatch(deleteTodo(todo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(serverTodoItem);
