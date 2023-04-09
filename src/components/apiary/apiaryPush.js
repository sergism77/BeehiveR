//this is the apiaryPush component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApiary } from '../../actions/index';

class ApiaryPush extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.fetchApiary();
    }
    
    render() {
        return (
        <div>
            <h1>Apiary</h1>
            <ul>
            </ul>
        </div>
        );
    }
    }

function mapStateToProps(state) {
    return { apiary: state.apiary };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryPush);

