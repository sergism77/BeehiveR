//this is the apiaryDelete component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteApiary } from '../../actions/index';

class ApiaryDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.deleteApiary();
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
    return bindActionCreators({ deleteApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryDelete);

