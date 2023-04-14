//this is the serverTodoClear.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';
import { clearCompleted } from '../actions';

const ClearCompleted = ({ dispatch }) => {
    return (
        <button onClick={() => dispatch(clearCompleted())}>
            Clear Completed
        </button>
    );
}

export default connect()(ClearCompleted);