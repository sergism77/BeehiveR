//this is the serverTodoMain.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';
import serverTodoItem from './serverTodoItem';

class serverTodoMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(todo) {
        this.props.toggleTodo({
            ...todo
        });
    }
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map(todo => (
                    <serverTodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={this.handleToggle}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (todo) => {
            dispatch(toggleTodo(todo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(serverTodoMain);
