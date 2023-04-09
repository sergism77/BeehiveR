//this is the apiaryBackup component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { backupApiary } from '../../actions/index';

class ApiaryBackup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.backupApiary();
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
    return bindActionCreators({ backupApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryBackup);

