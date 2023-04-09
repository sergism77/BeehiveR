//this is the apiaryUpdate component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateApiary } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';

class ApiaryUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.updateApiary();
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
    return bindActionCreators({ updateApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryUpdate);

