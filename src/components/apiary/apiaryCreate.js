//this is the apiary create component
//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createApiary } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';

class ApiaryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.createApiary();
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
    return bindActionCreators({ createApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryCreate);

