//this is the serverTodoCount.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';

const TodoCount = ({ count }) => {
    return (
        <div>
            {count} items left
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.todos.filter(todo => !todo.completed).length
    };
}

export default connect(mapStateToProps)(TodoCount);