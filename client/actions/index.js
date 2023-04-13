//this is the index.js in the actions folder

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBees } from '../../actions/index';

class Bees extends Component {
    constructor(props) {
        super(props);
        this.state = {
        bees: []
        }
    }
    
    componentDidMount() {
        this.props.fetchBees();
    }
    
    render() {
        return (
        <div>
            <h1>Bees</h1>
            <ul>
            </ul>
        </div>
        );
    }
    }

function mapStateToProps(state) {
    return { bees: state.bees };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBees }, dispatch);
}

//check for missing functions

function fetchBees() {
    return {
        type: 'FETCH_BEES'
    }
}

function fetchApiary () {
    return {
        type: 'FETCH_APIARY'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bees);
