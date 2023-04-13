//this is the serverTodoFooter.js file in the components folder in the server side

import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';

class serverTodoFooter extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(e) {
        this.props.setVisibilityFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <button value="SHOW_ALL" onClick={this.handleFilter}>All</button>
                <button value="SHOW_ACTIVE" onClick={this.handleFilter}>Active</button>
                <button value="SHOW_COMPLETED" onClick={this.handleFilter}>Completed</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
            
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(serverTodoFooter);
