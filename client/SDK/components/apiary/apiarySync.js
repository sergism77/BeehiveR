//this is the apiarySync component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { syncApiary } from '../../actions/index';

class ApiarySync extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiary: []
        }
    }
    
    componentDidMount() {
        this.props.syncApiary();
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
    return bindActionCreators({ syncApiary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiarySync);

