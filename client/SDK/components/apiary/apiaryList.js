//this is the apiaryList component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApiaries } from '../../actions/index';
import Apiary from '../apiary/apiary';

class ApiaryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        apiaries: []
        }
    }
    
    componentDidMount() {
        this.props.fetchApiaries();
    }
    
    renderApiaries() {
        return this.props.apiaries.map((apiary) => {
        return (
            <Apiary key={apiary.id} apiary={apiary} />
        );
        });
    }
    
    render() {
        return (
        <div>
            <h1>Apiary</h1>
            <ul>
            {this.renderApiaries()}
            </ul>
        </div>
        );
    }
    }

function mapStateToProps(state) {
    return { apiaries: state.apiaries };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchApiaries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiaryList);
